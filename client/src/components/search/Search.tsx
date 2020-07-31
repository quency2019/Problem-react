// @ts-nocheck
import React, { useRef } from 'react'
import styles from './Search.css'


export default function Search(props: any) {
    const searchRef = new useRef();
    const formRef = new useRef();
    // formRef.current.submit(e => {
    //     console.log(e);
    // })
    const keyDownSearch = (e) => {

        e.preventDefault()


        console.log(searchRef.current);
        props.onChange(searchRef.current.value)

    }

    return (
        <div className={styles.searchContent}>
            <form ref={formRef} onSubmit={(e) => {
                keyDownSearch(e)
            }}>
                <input type='text' ref={searchRef} ></input>
            </form>
        </div>
    )
}
