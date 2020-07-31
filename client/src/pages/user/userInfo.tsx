import React, { useRef, useState, useEffect } from 'react'
import styles from './userInfo.css'
import defaultImg from '../../assets/img/001.jpg'
import { UploadService } from '@/services/uploadServes'
import { connect } from 'dva'
import { UserService } from '@/services/userServices'

function userInfo(props: any) {
    const [imgSrc, setImgSrc] = useState(defaultImg)
    const [imgFile, setImgFile] = useState(null)
    const formRef = useRef()


    useEffect(() => {
        if (props.user.photo) {
            setImgSrc(`http://localhost:3000${props.user.photo}`)
        }
    }, [props.user.photo])
    console.log(props);
    useEffect(() => {
        formRef.current.user_name.value = props.user.user_name

    }, [props.user.user_name])



    const handleFileChange = (e: any) => {
        console.log(e.target);
        const input = e.target;
        const files = e.target.files;
        console.log(files);
        if (files && files[0]) {
            const file = files[0];
            if (file.size > 1024 * 1024 * 3) {
                alert("文件大小不能超过3M!")
                input.value = '';
                return false;
            } else {

                let src
                //火狐下，直接设img属性
                if (file.getAsDataURL) {
                    src = file.getAsDataURL();
                } else {
                    //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式  
                    src = window.URL.createObjectURL(file);

                }

                setImgSrc(src)
                setImgFile(file)

            }
        }

    }
    return (
        <div>
            <h1>用户信息</h1>

            <form ref={formRef} className={styles.form}>
                <span>用户头像：</span> <div className={styles.uploadwrap}>
                    <input type="file" placeholder="请上传头像" name="imgfile" className={styles.photo} onChange={(e) => { handleFileChange(e) }} />
                    <img src={imgSrc} alt="预览图片" />
                </div>

                <p><span>用户名：</span> <input type="text" name="user_name" disabled /></p>
                <span></span><input type="submit" value="修改头像提交" onClick={(e) => {
                    e.preventDefault()
                    if (imgFile) {
                        const formData = new FormData();
                        formData.append("imgfile", imgFile);
                        UploadService.Upload(formData).then(res => {
                            console.log(res);

                            UserService.editPhoto(props.user.id, { photo: res.data }).then(res => {
                                console.log(res);
                                if (res.status === "success") {
                                    alert("修改头像成功")
                                } else {
                                    alert("修改头像失败")
                                }

                            })

                        })

                    } else {
                        alert("修改头像成功")
                    }
                    return
                }} />
            </form>
        </div>
    )
}
const mapStateToProps = (state: any) => ({
    user: state.loginUser.user,
})

export default connect(mapStateToProps)(userInfo)