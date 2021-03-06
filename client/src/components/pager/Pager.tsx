// @ts-nocheck
import React from 'react';
import styles from './pager.css'

/**
 * 分页组件
 * 属性：
 * 1. current：初始页码
 * 2. total：总数据量
 * 3. limit：页容量，每页显示的数据量
 * 4. pagesShow：数字页码最多显示多少个
 * 5. onPageChange：当页码改变的事件
 */
/*
*
* <Pager
                current={current}
                total={total}
                limit={limit}
                pagesShow={pagesShow}
                onPageChange={(newPage)=>{
                    setCurrent(newPage)
                }}/>
* */

export function Pager(props) {

    if (props.total < 1) {
        return false
    }
    const pageNumber = getPageNumber(props);
    const min = getMin(props, pageNumber);
    const max = getMax(props, pageNumber, min)


    const numArr = [];
    for (let i = min; i <= max; i++) {
        numArr.push(<span key={i} className={props.current === i ? `${styles.normal} ${styles.active}` : `${styles.normal}`} onClick={() => { verifyCurrent(i, props, pageNumber) }}>{i}</span>)
    }



    return (
        <div className={styles.pagerL}>
            <span className={props.current === 1 ? `${styles.normal} ${styles.noSelect}` : `${styles.normal}`} onClick={() => { verifyCurrent(1, props, pageNumber) }}>首页</span>
            <span className={props.current === 1 ? `${styles.normal} ${styles.noSelect}` : `${styles.normal}`} onClick={() => { verifyCurrent((props.current - 1) < 1 ? 1 : (props.current - 1), props, pageNumber) }}>上一页</span>
            {numArr}
            <span className={props.current === pageNumber ? `${styles.normal} ${styles.noSelect}` : `${styles.normal}`} onClick={() => { verifyCurrent((props.current + 1) > pageNumber ? pageNumber : (props.current + 1), props, pageNumber) }}>下一页</span>
            <span className={props.current === pageNumber ? `${styles.normal} ${styles.noSelect}` : `${styles.normal}`} onClick={() => { verifyCurrent(pageNumber, props, pageNumber) }}>尾页</span>
            <span>{props.current}</span>/<span>{pageNumber}</span>
        </div>
    );

}

function getMin(props, pageNumber) {

    let min = props.current - Math.floor(props.pagesShow / 2);

    if (min < 1) {
        min = 1
    }/*else if (min>pageNumber-props.pagesShow){
        min=pageNumber-props.pagesShow
    }*/

    return min
}
function getMax(props, pageNumber, min) {

    let max = props.pagesShow + min - 1;


    if (max > pageNumber) {
        max = pageNumber
    }
    return max

}

function verifyCurrent(newPage, props, pageNumber) {
    if (newPage === props.current) return
    if (newPage <= 1) {
        newPage = 1;
    }
    if (newPage >= pageNumber) {
        newPage = pageNumber;
    }
    props.onPageChange(newPage)


}


function getPageNumber(props) {
    const pageNumber = Math.ceil(props.total / props.limit)

    return pageNumber

}

