import React, { useEffect, useState } from 'react'
import { UserService } from '@/services/userServices';
import { Tag, Avatar, Col, Row } from 'antd';

function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
}
function color() {
    const arr = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan"]
    return arr[random(0, arr.length)]
}
export default function userId(props) {
    console.log(props.match.params.id);
    const [user, setUser] = useState({})



    useEffect(() => {

        (async () => {
            const res = await UserService.findById(props.match.params.id)
            console.log(res);
            if (res.status === "success") {
                setUser(res.data[0])
            }

        })()

    }, [])

    if (Object.keys(user).length === 0) return null
    const shop_tags = user.shop_tags_name.split(",").map((it, index) => <Tag key={index} color={color()}>{it}</Tag>)



    return (
        <div>

            <Row gutter={[16, 16]}>
                <Col span={3}>头&nbsp;&nbsp;&nbsp;&nbsp;像:</Col>
                <Col span={20}>{user.photo ? <Avatar src={user.photo} size={64} /> : <Avatar icon="user" size={64} />}</Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col span={3}>用户名:</Col>
                <Col span={20}>{user.user_name}</Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={3}>密&nbsp;&nbsp;&nbsp;&nbsp;码:</Col>
                <Col span={20}>{user.user_password}</Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={3}>用户题库:</Col>
                <Col span={20}>{shop_tags}</Col>
            </Row>




        </div>
    )
}
