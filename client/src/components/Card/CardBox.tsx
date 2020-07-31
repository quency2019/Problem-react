import React from 'react'
import styles from './CardBox.css'
import Card from './Card/Card'
import { IProblem } from '@/services/problemServices'


export default function CardBox(props: any) {
    console.log(props.data);
    let cards

    if (props.data) {
        cards = props.data.map((it: IProblem) => <Card key={it.id} data={it} changeHelper={props.changeHelper} changeShopping={props.changeShopping} />)
    }
    return (
        <div className={styles.boxWrap}>

            {cards}


        </div>
    )
}


