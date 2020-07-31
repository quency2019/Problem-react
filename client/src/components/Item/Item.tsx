import React from 'react'
import styles from './Item.css'

export default function Item(props: { title: string; children: any }) {
    return (
        <div className={styles.itemWrap}>
            <div className={styles.itemTitle}>
                {props.title}
            </div>
            <div className={styles.itemContent}>
                {props.children}
            </div>
        </div>
    )
}
