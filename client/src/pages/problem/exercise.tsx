// @ts-nocheck
import React, { useState, useEffect } from 'react'
import styles from './exercise.css'
import { ProblemService } from '@/services/problemServices'
import { Modal } from '@/components/Modal/Modal'

function getRadom(min: number, max: number) {
    console.log(min, max);
    return Math.floor(Math.random() * (max - min) + min)

}


export default function exercise(props) {
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const [isLoad, setIsLoad] = useState(true)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setIsLoad(true)

        if (!props.data) {
            ProblemService.getAll().then(res => {
                setData(res.data.result as any)
                setCount(res.data.count)
            })
        } else {
            setData(props.data)
            setCount(props.count)
        }

        setIsLoad(false)
    }, [index])

    useEffect(() => {
        setIndex(getRadom(0, count))
    }, [count])

    if (data.length === 0) return null
    return (
        <div className={styles.exercise}>
            <h1>刷题</h1>
            <div className={styles.content}>
                <h2>{data[index].title}</h2>
                <div className={styles.details}>
                    {data[index].content}
                </div>
            </div>
            <button className={styles.pre} onClick={() => {
                setIsLoad(true)
                setIndex(getRadom(0, count))
                setIsLoad(false)
            }}>上一题</button>
            <button className={styles.next} onClick={() => {
                setIsLoad(true)
                setIndex(getRadom(0, count))
                setIsLoad(false)
            }}>下一题</button>
            <Modal isShow={isLoad}>加载中。。。。</Modal>

        </div>
    )
}

