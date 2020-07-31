// @ts-nocheck
import React, { Component } from 'react'
import styles from './problemAdd.css'
import E from 'wangeditor'
import { ProblemService } from '@/services/problemServices'





export default class problemAdd extends Component {

    state = {
        content: "<div>默认值</div>"
    }

    componentDidMount() {
        const titleRef = this.refs.titleRef
        const tagsRef = this.refs.tagsRef
        const contentRef = this.refs.contentRef
        const submitRef = this.refs.submitRef

        //获取editorElem盒子
        const editor = new E(contentRef)  //new 一个 editorElem富文本
        editor.customConfig.uploadImgShowBase64 = true
        editor.create() //创建
        editor.txt.html(this.state.content)

        submitRef.addEventListener('click', async (e) => {  //监听点击提交按钮
            // 读取 html
            e.preventDefault()
            console.log(titleRef.value);
            console.log(tagsRef.value);
            console.log(editor.txt.html());
            this.setState({
                content: editor.txt.html()  //获取富文本内容
            })
            console.log(this.state.content);
            if (titleRef.value === "" || this.state.content === "" || tagsRef.value === "") {
                alert("信息不完整，请填写完整之后在提交")

            } else {
                const res = await ProblemService.add({
                    title: titleRef.value,
                    content: this.state.content,
                    tags: tagsRef.value,
                    love: 0,
                    good: 0,
                    views: 0,

                })
                console.log(res);
            }

        }, false)


    }
    render() {
        return (
            <div className={styles.editorWrap}>
                <form>
                    <p><input type='text' placeholder='请输入标题' ref='titleRef'></input></p>
                    <p><input type='text' placeholder='请输入分类' ref='tagsRef'></input></p>
                    <div ref='contentRef'></div>
                    <button ref='submitRef' >提交</button>
                </form>
            </div>
        )
    }
}
