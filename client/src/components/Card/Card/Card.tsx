//@ts-nocheck
import React, { useState, useEffect } from 'react'
import styles from './Card.css'
import { Link, withRouter } from 'umi'
import { ProblemService } from '@/services/problemServices'
import { connect } from 'dva'
function Card(props: any) {
    const [good, setGood] = useState(false)
    const [love, setLove] = useState(false)
    const [isShopping, setIsShopping] = useState(false)
    useEffect(() => {
        ProblemService.viladataProblemUser(props.data.id, props.user.id).then(res => {
            if (!res.data) return
            if (res.data.good === 0) {
                setGood(false)
            } else if (res.data.good === 1) {
                setGood(true)
            }

            if (res.data.love === 0) {
                setLove(false)
            } else if (res.data.love === 1) {
                setLove(true)
            }
        });
    }, [props.data])

    useEffect(() => {
        if (!props.user.shopping) return;
        const res = props.user.shopping.split(',').find(it => it === `${props.data.id}`)
        if (res) {
            setIsShopping(true)
        }
    }, [props.user.shopping])
    return (
        <div className={styles.card}>
            <Link to={`/problem/${props.data.id}`} onClick={() => {
                props.changeHelper && props.changeHelper(props.data.id, 'views')
            }}>
                <div className={styles.cardTitle}>
                    {props.data.title}
                </div>
                <div className={styles.cardContent}>
                    {props.data.content}
                </div>
            </Link >
            <div className={styles.cardFoot}>
                {isShopping ? <div className={styles.addCardBtn} onClick={() => {
                    const newShopping = props.user.shopping.split(',').filter(it => it !== `${props.data.id}`).join(",")
                    props.changeShopping(newShopping)
                }}>取消购物车</div> : <div className={styles.addCardBtn} onClick={() => {
                    //没有登陆的情况 不允许加入购物车
                    if (Object.keys(props.user).length === 0) {
                        const cb = confirm("没有登陆的情况不允许加入购物车,是否跳转到登陆页面？")
                        if (cb) {
                            props.history.push("/login")
                            return
                        }

                    }


                    const newShopping = props.user.shopping.concat(`${props.data.id},`)

                    props.changeShopping(newShopping)
                }}>加入购物车</div>}

                <i className='iconfont' >&#xe7d0;</i>{props.data.views}
                {love ? <i className={`${styles.loveactive} iconfont`} onClick={(e) => {
                    change(props.data.id, 'love', props.changeHelper)
                }} >&#xe60a;</i> : <i className='iconfont' onClick={(e) => {
                    change(props.data.id, 'love', props.changeHelper)
                }} >&#xe611;</i>}{props.data.love}
                {good ? <i className={`${styles.goodactive} iconfont`} onClick={() => {
                    change(props.data.id, 'good', props.changeHelper)
                }} >&#xe775;</i> : <i className='iconfont' onClick={() => {
                    change(props.data.id, 'good', props.changeHelper)
                }} >&#xe775;</i>}{props.data.good}
            </div>
        </div >
    )
}

function change(id, type, cb) {
    cb && cb(id, type)
}

const mapStateToProps = (state: any) => ({

    user: state.loginUser.user,


})



export default withRouter(connect(mapStateToProps)(Card))


