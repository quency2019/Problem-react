import React, { Component } from 'react'
import { connect } from "dva"
import { Table, Divider } from 'antd'
import { Link } from 'umi';
import { UserService } from '@/services/userServices';

export class userList extends Component {

    state = {
        data: [],
        isLoading: true
    }
    columns = [
        {
            title: '用户名',
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
                            this.props.deleteUser && this.props.deleteUser(record.id)
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
                title: it.user_name,
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
                                this.props.history.push(`/admin/userList?search=${this.props.search}&limit=10&page=${newPage}`)
                            }
                        }
                    }
                />;

            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    current: state.user.search.page,
    total: state.user.result.count,
    limit: state.user.search.limit,
    search: state.user.search.search,
    data: state.user.result.data,


})

const mapDispatchToProps = (dispatch: any) => ({
    deleteUser(id: number) {
        dispatch({
            type: "user/deleteUser",
            payload: id
        })

    }

})
export default connect(mapStateToProps, mapDispatchToProps)(userList)
