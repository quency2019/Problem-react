import React, { Component } from 'react'
import styles from './index.css'
import Search from '@/components/search/Search'
import CardBox from '@/components/Card/CardBox'
import { ProblemService, IProblem } from '@/services/problemServices'
import { router } from 'umi'
import { connect } from 'dva'

class index extends Component<any, any> {
    state = {
        data: [],
        count: 0
    }
    async componentDidMount() {
        const result = await ProblemService.FindByCondition({
            page: 1,
            limit: 6
        })
        this.setState({
            data: result.data.result,
            count: result.data.count
        })
    }
    searchHelper = (text: string) => {

        console.log(text);
        this.props.history.push(`/problem/search?search=${text}&limit=10&page=1`)
    }
    render() {
        return (
            <div>
                <div className={styles.searchWrap}>
                    <div className={`${styles.searchImg} iconfont`} >
                        &#xe693;
                    </div>
                    <Search onChange={(text: string) => {
                        this.searchHelper(text)
                    }}></Search>
                </div>
                <div className={styles.boxWrap}>
                    <CardBox
                        data={this.state.data}
                        changeHelper={async (id: number, info: string) => {
                            if (info === "views") {
                                await ProblemService.addViews(id)
                            } else if (info === "love") {
                                await ProblemService.editLove(id, this.props.user.id)
                            } else {
                                await ProblemService.editGood(id, this.props.user.id)
                            }
                            const problem = await ProblemService.FindById(id)
                            const newData = this.state.data.map((it: IProblem) => {
                                if (it.id === id) {
                                    return problem.data[0]
                                }
                                return it
                            })
                            this.setState({
                                data: newData
                            })


                        }}
                        changeShopping={this.props.changeShopping}
                    ></CardBox>
                </div>
            </div >

        )
    }
}


const mapStateToProps = (state: any) => ({
    user: state.loginUser.user,
})
const mapDispatchToProps = (dispatch: any) => ({
    changeShopping(shopping: string) {
        dispatch({
            type: "loginUser/editUserShopping",
            payload: shopping,
        })
    },


})




export default connect(mapStateToProps, mapDispatchToProps)(index)