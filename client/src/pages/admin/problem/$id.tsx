



import React, { Component } from 'react'
import { ProblemService } from '@/services/problemServices';
import { Row, Col } from 'antd';


class detail extends Component<any, any> {
    state = {
        data: {},

    }
    async componentDidMount() {
        const id = this.props.match.params.id
        const result = await ProblemService.FindById(id)
        this.setState({
            data: result.data[0],

        })



    }

    render() {
        return (

            <>


                <Row gutter={[16, 16]}>
                    <Col span={3}>标题:</Col>
                    <Col span={20}>{this.state.data.title}</Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col span={3}>内容:</Col>
                    <Col span={20}>{this.state.data.content}</Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={3}>收藏时间:</Col>
                    <Col span={20}>{new Date(this.state.data.utime * 1000).toLocaleString()}</Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={3}>分类:</Col>
                    <Col span={20}>{this.state.data.tags}</Col>
                </Row>
            </>



        )
    }
}



export default detail