import express from 'express'
import multer from 'multer'
import path from 'path'
import { writeResult } from '../utils/resultHelper'

const router = express.Router()

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, "../../public/upload"),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname))
    }
})

const allowExtensions = [".jpg", ".png", ".gif", ".bmp", ".svg", ".tif"]
const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024// 文件上传尺寸
    },
    fileFilter(req, file, cb) {
        const ext = path.extname(file.originalname)
        if (allowExtensions.includes(ext)) {
            cb(null, true)
        } else {
            cb(new Error("文件类型不正确"))
        }
    }
}).single('imgfile')
// 文件标识imgfile需要统一

router.post("/", (req, res) => {
    upload(req, res, (err) => {
        // 发生错误
        if (err) {
            console.log(err);
            res.send(writeResult("error", "头像上传失败", err.message))

            console.log(err)
        }
        // 一切都好
        else {
            const url = `/upload/${req.file.filename}`
            res.send(writeResult("success", "头像上传成功", url))

        }
    })
})


export default router