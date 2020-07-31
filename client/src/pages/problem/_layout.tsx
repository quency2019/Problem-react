// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react'
import { Link, withRouter } from 'umi'
import styles from './layout.css'
import HeadSearch from '@/components/headSearch'
import { connect } from 'dva'
import SideModal from '../../components/sideModal/index'


function problemLayout(props: any) {
    const [isShow, setIsShow] = useState(false)
    const [search, setSearch] = useState("")
    const [block, setBlock] = useState(false)
    const [shoppingNum, setShoppingNum] = useState(0)

    const regSearch = /^\/problem\/search\/?[\w\W]?/g
    const pathN = props.history.location.pathname
    const searchT = props.history.location.query.search
    const res = regSearch.test(pathN)

    useEffect(() => {
        if (res) {
            setBlock(true)
        }
        return () => (setBlock(false))

    }, [pathN])

    useEffect(() => {
        props.onChange && props.onChange(searchT)
    }, [searchT])

    useEffect(() => {
        if (Object.keys(props.user).length === 0) return
        const shopping = props.user.shopping.split(',').filter((it: any) => it)
        setShoppingNum(shopping.length)
    }, [props.user])
    function searchHelper(value) {
        setSearch(value)
        props.history.push(`/problem/search?search=${search}&limit=10&page=1`)

    }
    return (
        <div>
            <header className={`${styles.problemhead} layoutauto`}>
                <div className={styles.logo}>
                    <i className="iconfont">&#xe624;</i>

                </div>


                <ul className={`${styles.nav} clearfix`}>
                    <Link to="/problem">首页</Link>
                    <Link to="/problem/shop">题库</Link>
                    <Link to="/problem/exercise">刷题</Link>
                    <Link to="/admin">后台</Link>
                </ul>

                <div className={styles.navright}>
                    <div className={styles.userWrap}>
                        <i className='iconfont'>&#xe660;</i>
                        <div className={styles.liWrap}>
                            <Link to="/user/userinfo">用户信息</Link>
                            <Link to="/login">登录页面</Link>
                            <Link to="/user/register">注册页面</Link>
                            <Link to="/user/shop">我的题库</Link>
                        </div>
                    </div>

                    <div className={styles.shopWrap} onClick={() => {
                        setIsShow(true)
                    }}>
                        <i className='iconfont'>&#xe606;</i>
                        <span>{shoppingNum}</span>
                    </div>


                </div>
                <div className={styles.headsearch} style={block ? { display: "block" } : { display: "none " }}>
                    <HeadSearch searchHelper={searchHelper} />
                </div>
            </header>
            <SideModal isShow={isShow} setIsShow={(newState: boolean) => { setIsShow(newState) }} user={props.user} changeShopping={props.changeShopping} shoppingNum={shoppingNum} />

            <div className='layoutauto'>
                {props.children}
            </div>
            <footer className={`${styles.footer} layoutauto`} >


            </footer>

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


export default connect(mapStateToProps, mapDispatchToProps)(problemLayout)



