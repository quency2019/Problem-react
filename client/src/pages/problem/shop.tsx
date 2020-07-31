import React, { useEffect, useState } from 'react'
import styles from './shop.css'
import CardBox from '@/components/Card/CardBox'
import Item from '@/components/Item/Item'
import { Link } from 'umi'
import { ProblemService, IProblem } from '@/services/problemServices'
import { Pager } from '@/components/pager/Pager'
import { Modal } from '@/components/Modal/Modal'
import { connect } from 'dva'

function randomColor(index: number) {
    const arr = ["#C0FF3E", "#EED2EE", "#808080", "#6959CD", "#BFEFFF", "#FF83FA"]
    return arr[index]
}
function getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
}
function searchByTag(tag_name: string) {

}
function shop(props) {

    const [data, setData] = useState([])
    const [hotData, setHotData] = useState([])
    const [newData, setNewData] = useState([])
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(1)
    const [isLoad, setIsLoad] = useState(false)
    const [tags, setTags] = useState([])

    useEffect(() => {
        setIsLoad(true)
        ProblemService.FindByCondition({
            page: page,
            limit: 10
        }).then(res => {
            console.log(res);
            setData(res.data.result as any)
            setCount(res.data.count)
        })
        ProblemService.getHot(10).then((res: any) => {
            console.log(res);
            setHotData(res.data)
        })
        ProblemService.getNew(10).then((res: any) => {
            setNewData(res.data)
        })
        ProblemService.getTags().then((res: any) => {
            console.log(res);
            res.data.filter((it: any) => it)
            setTags(res.data)
        })

        setIsLoad(false)
    }, [])

    useEffect(() => {
        ProblemService.FindByCondition({
            page: page,
            limit: 10
        }).then(res => {
            console.log(res);
            setData(res.data.result as any)
            setCount(res.data.count)
        })
    }, [page])

    let newLists;
    let hotLists;
    if (newData.length === 0) {
        return newLists = null
    }
    if (hotData.length === 0) {
        return hotLists = null
    }

    newLists = newData.map((it: IProblem) => (<Link key={it.id} to={`/problem/${it.id}`}> {it.title}</Link>))
    hotLists = hotData.map((it: IProblem) => (<Link key={it.id} to={`/problem/${it.id}`}> {it.title}</Link>))
    const tagsDom = tags.map((it: any) => {

        const index = getRandom(0, 6)
        const color = randomColor(index)
        return (<Link key={it.id} to={`/problem/search?search=${it.tag}&limit=10&page=1`}><span className={styles.tagSpan} key={it.id} style={{
            color
        }} >{it.tag}</span></Link>)
    })

    return (
        <div className={styles.wrap}>
            <div className={styles.right}>
                <Item title="标签">
                    {tagsDom}
                </Item>
                <Item title="热门">
                    {hotLists}
                </Item>
                <Item title="最新">
                    {newLists}
                </Item>

            </div>
            <div className={styles.left}>
                <CardBox
                    data={data}
                    changeHelper={async (id: number, info: string) => {
                        if (info === "views") {
                            await ProblemService.addViews(id)
                        } else if (info === "love") {
                            if (!props.user.id) {
                                alert('该功能登陆后才可以进行');
                            }
                            await ProblemService.editLove(id, props.user.id)
                        } else {
                            if (!props.user.id) {
                                alert('该功能登陆后才可以进行');
                            }
                            await ProblemService.editGood(id, props.user.id)
                        }
                        const problem = await ProblemService.FindById(id)
                        const newData: any = data.map((it: IProblem) => {
                            if (it.id === id) {
                                return problem.data[0]
                            }
                            return it
                        })
                        setData(newData)
                    }}
                    changeShopping={props.changeShopping}></CardBox>
                <Pager
                    current={page}
                    total={count}
                    limit={10}
                    pagesShow={5}
                    onPageChange={(newPage: number) => {
                        setPage(newPage)

                    }} />
            </div>

            <Modal isShow={isLoad}>加载中。。。。</Modal>
        </div>
    )
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



export default connect(mapStateToProps, mapDispatchToProps)(shop)