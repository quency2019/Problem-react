// @ts-nocheck
import React from 'react'
import Login from './login'
import styles from './layout.css'
import { Link } from 'umi'

export default function adminLayout(props) {


    if (props.location.pathname === "admin/login") {

        return <Login />
    }
    return (
        <div className={styles.wrap}>
            <header className={styles.header}>
                <Link to='/admin'><h1>problem后台管理</h1></Link>
            </header>
            <div className={styles.main}>
                {props.children}
            </div>
            <aside className={styles.aside}>
                <div className={styles.item}>
                    <div className={styles.title}>
                        problem管理
                    </div>
                    <Link to='/admin/problem/problemList?search=&limit=10&page=1'>problem列表</Link>
                    <Link to='/admin/problem/problemAdd'>添加problem</Link>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>
                        user管理
                    </div>
                    <Link to='/admin/user/userList?search=&limit=10&page=1'>user列表</Link>
                </div>


            </aside>
        </div>

    )
}
