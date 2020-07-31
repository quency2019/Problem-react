

import styles from './detail.css'

import React, { Component } from 'react'
import { ProblemService } from '@/services/problemServices';
import { MessageService } from '@/services/messageServices';
import Comments from '@/components/comments/comments';
import { connect } from 'dva';

class detail extends Component<any, any> {
    state = {
        data: {},
        commentCount: 0,
        commentData: [],
        randomSvg: "",
        randomText: 0
    }
    async componentDidMount() {
        const id = this.props.match.params.id
        const result = await ProblemService.FindById(id)

        const cCount = await MessageService.find(id)
        console.log(cCount);

        const randomS = await MessageService.getRandomCode()

        this.setState({
            data: result.data[0],
            commentCount: cCount.data.count,
            commentData: cCount.data.data,
            randomSvg: randomS.data.data,
            randomText: randomS.data.text
        })

        const codeSvg = this.refs.codeSvg;
        codeSvg.innerHTML = this.state.randomSvg

    }
    changeCode = async () => {
        const randomS = await MessageService.getRandomCode()
        console.log(randomS);
        this.setState({
            randomSvg: randomS.data.data,
            randomText: randomS.data.text
        }, () => {
            const codeSvg = this.refs.codeSvg;
            codeSvg.innerHTML = this.state.randomSvg
        })

    }
    sendMessage = async (e) => {
        e.preventDefault()
        const code = this.refs.codeRef.value, text = this.refs.textRef.value;
        const regCode = new RegExp(`^${this.state.randomText}$`, 'i')

        if (!code || !text) {
            alert("填写信息完整才可以提交")
            return
        }
        if (!regCode.test(code)) {

            alert("验证码不正确");
            return
        }
        const cb = confirm("请确认提交信息，确定提交吗？")
        // console.log(this.props.history(this.props.location.pathname));
        this.props.history.go(0)
        if (cb) {
            await MessageService.add({

                problem_id: this.props.match.params.id,
                user_id: this.props.user.id,
                user_name: this.props.user.user_name,
                message: text,

            })

        } else {
            return
        }


    }
    render() {
        console.log(this.state.commentData);
        const comments = this.state.commentData.map(it => <Comments key={it.id} data={it} />)
        return (

            <div className={styles.wrap}>
                <div className={styles.title}>
                    <h1>{this.state.data.title}</h1>
                    <p>收藏时间:{new Date(this.state.data.utime * 1000).toLocaleString()}
                        <a href="#comment">评论{this.state.commentCount}</a>

                    </p>
                </div>
                <div className={styles.content}>
                    答案 {this.state.data.content}
                </div>
                <div className={styles.content}>
                    分类 {this.state.data.tags}
                </div>
                <div className={styles.message}>

                </div>
                <div id="comment" className={styles.comment}>
                    <h1>评论区</h1>
                    <div>{this.state.data.title}:目前有:{this.state.commentCount}</div>
                    {comments}
                    <div className={styles.commentWrap}>

                        <textarea placeholder="请在这里输入你的评论信息" ref="textRef"></textarea>
                        <p><input type="text" placeholder="请在这里输入验证码" ref="codeRef" ></input>
                            <span ref="codeSvg" onClick={this.changeCode}></span>
                        </p>


                        <button onClick={this.sendMessage}>提交留言</button>


                    </div>

                </div>


            </div >

        )
    }
}

const mapStateToProps = (state: any) => ({
    user: state.loginUser.user,
})

export default connect(mapStateToProps)(detail)