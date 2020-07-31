// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react'
import styles from './index.css'
import { connect } from 'dva'


function HeadSearch(props: any) {
    const searchRef = useRef()

    //地址修改 内容修改
    useEffect(() => {
        searchRef.current.value = props.search;
    }, [props.search])


    return (
        <div className={styles.headsearch}>

            <form onSubmit={(e) => {
                e.preventDefault()
                props.searchHelper && props.searchHelper(searchRef.current.value)

            }}>
                <input type='text' placeholder='请搜索问题' ref={searchRef}></input>
                <button className='iconfont' onClick={() => { props.searchHelper && props.searchHelper(searchRef.current.value) }
                }>&#xe629;</button>
            </form>



        </div>
    )
}
const mapStateToProps = (state: any) => ({
    search: state.problem.search.search,
})



export default connect(mapStateToProps)(HeadSearch)
