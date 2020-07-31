import React, { useState, useEffect } from 'react'
import { ShopService } from '@/services/shopServices'
import { ProblemService } from '@/services/problemServices'
import { Card } from 'antd'

function renderProblem(problemData = []) {

    const problemLists = problemData.map(it => {

        return (<Card title={it.title} style={{ width: 300, margin: "10px 0" }}>
            <p style={{ width: 300, overflow: "hidden" }}>{it.content}</p>
        </Card>)
    })


    return problemLists
}

export default function shopName(props: any) {
    const [shopData, setShopData] = useState({})
    const [problemData, setProblemData] = useState([])
    const id = props.match.params.shop_id


    useEffect(() => {
        (async () => {
            const res = await ShopService.findById(id)
            if (res.data[0]) {
                setShopData(res.data[0])
            }

        })()

    }, [id])


    useEffect(() => {
        if (!shopData.shop_content) return
        (async () => {
            const problemIdS = shopData.shop_content.split(",").filter(it => it)
            console.log(problemIdS);
            let arr = []
            problemIdS.forEach(async (it: any) => {
                const res = await ProblemService.FindById(it)
                arr.push(res.data[0])
                if (arr.length === problemIdS.length) {
                    setProblemData(arr)
                }

            })
        })()

    }, [shopData.shop_content])



    const problemLists = renderProblem(problemData)
    return (
        <div style={{
            display: "flex", flexDirection: "row",
            flexWrap: " wrap"
        }}>
            {problemLists}

        </div>
    )
}
