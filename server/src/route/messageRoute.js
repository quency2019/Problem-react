import express from 'express'
import { MessageService } from '../Service/messageService'
import svgCaptcha from 'svg-captcha'
import { writeResult } from '../utils/resultHelper'

const router = express.Router()

// 按页查询message // 按problem ID查询message
router.get('/problem/:id', async (req, res) => {
    const result = await MessageService.FindByCondition(req.params.id, req.query)
    res.send(result)

})
// 添加message
router.post('/add', async (req, res) => {

    const result = await MessageService.add(req.body)

    res.send(result)

})
// 修改message
router.put('/:id', async (req, res) => {

    const result = await MessageService.edit(req.params.id, req.body)

    res.send(result)

})
// 按ID删除message

router.delete('/:id', async (req, res) => {
    const result = await MessageService.delete(req.params.id)
    res.send(result)
})

// 按ID查询message

router.get('/message/:id', async (req, res) => {
    const result = await MessageService.FindById(req.params.id)
    res.send(result)


})
// // 按problem ID查询message

// router.get('/problem/:id', async (req, res) => {
//     const result = await MessageService.FindByProblemId(req.params.id)
//     res.send(result)


// })


router.get('/getRandomCode', async (req, res) => {
    let captcha = svgCaptcha.create({ fontSize: 50, width: 100, height: 30 });

    const result = writeResult("success", "查询成功", captcha)
    res.send(result);
})

export default router