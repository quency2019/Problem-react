import React, { Component } from 'react'
import styles from './search.css'
import CardBox from '@/components/Card/CardBox'
import { connect } from "dva"
import { Pager } from '@/components/pager/Pager'
class search extends Component<any, any> {


    render() {
        console.log(this.props);
        console.log(this.props.history.location.query.search);
        return (
            <div className={styles.wrap}>
                <div className={styles.contentBox}>
                    <CardBox
                        data={this.props.data}
                        changeHelper={async (id: number, info: string) => {
                            if (info === "views") {
                                this.props.changeViews && this.props.changeViews(id)
                            } else if (info === "love") {
                                this.props.changeLove && this.props.changeLove(id, 3)
                            } else {
                                this.props.changeGood && this.props.changeGood(id, 3)
                            }

                        }} ></CardBox>

                </div>
                <Pager
                    current={this.props.current}
                    total={this.props.total}
                    limit={this.props.limit}
                    pagesShow={5}
                    onPageChange={(newPage) => { this.props.history.push(`/problem/search?search=${this.props.search}&limit=10&page=${newPage}`) }} />
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


    changeViews(problem_id: number) {
        dispatch({
            type: "problem/editViews",
            payload: {
                problem_id,
            }


        })
    },
    changeGood(problem_id: number, user_id: number) {
        dispatch({
            type: "problem/editGood",
            payload: {
                problem_id,
                user_id,
            }


        })
    },
    changeLove(problem_id: number, user_id: number) {
        dispatch({
            type: "problem/editLove",
            payload: {
                problem_id,
                user_id,
            }


        })
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(search)

