import React, { useRef, useState } from 'react'
import { UserService } from '@/services/userServices'
import styles from './login.css'
import { connect } from 'dva'
import loginUser from '@/models/loginUser'
import { Link } from 'umi'
export default function login(props: any) {
    const formRef = useRef()
    const [nameTip, setNameTip] = useState("")
    const [pwdTip, setPwdTip] = useState("")
    const [pwd, setPwd] = useState("")
    const vilidataUserNameHelper = (value: string) => {
        const reg = /^\w{6,18}$/;
        if (!value) {
            setNameTip("用户名不能为空")
        } else if (!reg.test(value)) {
            setNameTip("用户名必须是6-18位的字母数字及下划线")
        } else {
            setNameTip("")
        }
    }
    const vilidataUserPwdHelper = (value: string) => {
        const reg = /^\w{6,18}$/;
        if (!value) {
            setPwdTip("用户密码不能为空")
        } else if (!reg.test(value)) {
            setPwdTip("用户名密码必须是6-18位的字母数字及下划线")
        } else {
            setPwdTip("")
            setPwd(value)
        }


    }

    return (
        <div>
            <Link to="/register">注册</Link>

            <form ref={formRef} className={styles.form}>
                <label className={styles.formli}><i>用户名:</i><input type="text" name="user_name" placeholder="请输入用户名" onChange={(e) => {
                    vilidataUserNameHelper(e.target.value)
                }} /><span className={styles.tips}>{nameTip}</span></label>
                <label className={styles.formli}><i>密&nbsp;&nbsp;&nbsp;&nbsp;码:</i><input type="password" name="user_password" placeholder="请输入密码" onChange={(e) => {
                    vilidataUserPwdHelper(e.target.value)
                }} /><span className={styles.tips}>{pwdTip}</span></label>

                <label className={styles.formli}><i></i><input className={styles.btn} type="submit" value="登录" onClick={(e) => {
                    e.preventDefault()

                    const user_name: string = formRef.current.user_name.value;
                    const user_password: string = formRef.current.user_password.value;

                    if (pwdTip || nameTip) {
                        alert("请检查信息")
                    } else {
                        UserService.vilidation({
                            user_name,
                            user_password,

                        }).then(res => {
                            console.log(res);
                            if (res.status === "success") {
                                console.log(res);
                                localStorage.setItem("user_name", user_name)
                                props.history.push("/problem/")
                            } else {

                                alert("帐号密码有错误，请检查")
                            }



                        })
                    }
                }} /></label>
            </form>

        </div>
    )
}







