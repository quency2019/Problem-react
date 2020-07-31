
import React, { useState, useEffect } from 'react'
import styles from './layout.css'
import { Link } from 'umi';
import SideModal from '../../components/sideModal/index'
import { connect } from 'dva';

function userLayout(props: any) {
    console.log(props.history);
    const [isShow, setIsShow] = useState(false)
    const [shoppingNum, setShoppingNum] = useState(0)

    useEffect(() => {
        if (Object.keys(props.user).length === 0) return
        const shopping = props.user.shopping.split(',').filter((it: any) => it)
        setShoppingNum(shopping.length)
    }, [props.user])

    return (
        <div>
            <header className={`${styles.userhead} layoutauto`}>
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

            </header>
            <SideModal isShow={isShow} setIsShow={(newState: boolean) => { setIsShow(newState) }} />

            <div className='layoutauto'>
                {props.children}
            </div>


        </div>
    )
}

const mapStateToProps = (state: any) => ({
    user: state.loginUser.user,
})

export default connect(mapStateToProps)(userLayout)