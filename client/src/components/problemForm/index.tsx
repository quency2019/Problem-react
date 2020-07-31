import React, { useRef, useState, useEffect } from 'react'
import styles from './index.css'
import E from 'wangeditor'
import { ProblemService } from '@/services/problemServices'



export default function problemForm(props) {


    const [content, setContent] = useState('<p>请输入内容</p>')

    const titleRef = new useRef()
    const tagsRef = new useRef()
    const contentRef = new useRef()
    const submitRef = new useRef()
    useEffect(() => {

        const elem = contentRef.current; //获取editorElem盒子
        const editor = new E(elem)  //new 一个 editorElem富文本
        editor.customConfig.uploadImgShowBase64 = true
        editor.create() //创建
        editor.txt.html(content)
        submitRef.current.addEventListener("click", async (e) => {
            e.preventDefault()
            const title = titleRef.current.value;
            const tags = tagsRef.current.value;

            setContent(editor.txt.html())
            console.log(editor.txt.html());
            console.log(title, tags, content);

            if (title === "" || editor.txt.html() === "<p>请输入内容</p>" || tags === "") {
                alert("信息不完整，请填写完整之后在提交")

            } else {
                const res = await ProblemService.add({
                    title,
                    content,
                    tags,
                    love: 0,
                    good: 0,
                    views: 0,

                })
            }
        })
    }, [])



    return (
        <div className={styles.editorWrap}>
            <form>
                <p><input type='text' placeholder='请输入标题' ref={titleRef}></input></p>
                <p><input type='text' placeholder='请输入分类' ref={tagsRef}></input></p>
                <div ref={contentRef}></div>
                <button ref={submitRef} >提交</button>
            </form>
        </div>
    )

}
