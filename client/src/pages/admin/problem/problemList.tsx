import React, { Component } from 'react'
import { connect } from "dva"
import { Table, Divider } from 'antd'
import { Link } from 'umi';

export class problemList extends Component {

    state = {
        data: [],
        isLoading: true
    }
    columns = [
        {
            title: '题目标题',
            dataIndex: 'title',
            key: 'title',
        },

        {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => {
                console.log(text, record)

                return (
                    <span>
                        <Link to={`${record.id}`}>查看</Link>
                        <Divider type="vertical" />
                        <a onClick={async (e) => {
                            e.preventDefault();
                            this.props.deleteProblem && this.props.deleteProblem(record.id)
                        }}>删除</a>
                    </span>
                )

            }
        },
    ];


    componentDidMount() {
        this.setState({
            isLoading: true
        })

        this.setState({
            data: this.props.data,
            isLoading: false
        })

    }

    render() {
        console.log(this.props.data);
        if (!this.props.data) return null


        const dataSource = this.props.data.map((it, index) => {
            return {
                id: it.id,
                key: index,
                title: it.title,
            }
        })

        return (
            <div>


                <Table
                    dataSource={dataSource}
                    columns={this.columns}
                    loading={this.state.isLoading}

                    pagination={
                        {
                            total: this.props.total,
                            pageSize: this.props.limit,
                            current: this.props.current,
                            onChange: (newPage) => {
                                console.log(newPage);
                                this.props.history.push(`/admin/problemList?search=${this.props.search}&limit=10&page=${newPage}`)
                            }
                        }
                    }
                />;

            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    current: state.problem.search.page,
    total: state.problem.result.count,
    limit: state.problem.search.limit,
    search: state.problem.search.search,
    data: state.problem.result.data,


})

const mapDispatchToProps = (dispatch: any) => ({
    deleteProblem(id: number) {
        dispatch({
            type: "problem/deleteProblem",
            payload: id
        })

    }

})

export default connect(mapStateToProps, mapDispatchToProps)(problemList)
