import express from 'express'
import { ShopService } from '../Service/shopService'
const router = express.Router()

// 通过id获取到题库
router.get('/shop/:id', async (req, res) => {
    const result = await ShopService.find(req.params.id)
    console.log(result)
    res.send(result)

})
// 通过user_id获取到题库
router.get('/user_id/:id', async (req, res) => {
    const result = await ShopService.findByUserId(req.params.id)
    console.log(result)
    res.send(result)

})
//添加题库
router.post('/add', async (req, res) => {
    const result = await ShopService.add(req.body)
    console.log(result)
    res.send(result)

})


// 修改题库内容
router.put('/:id', async (req, res) => {
    const result = await ShopService.edit(req.params.id, req.body)
    console.log(result)
    res.send(result)

})
// 删除题库标题
router.delete('/:id', async (req, res) => {
    const result = await ShopService.delete(req.params.id)
    console.log(result)
    res.send(result)

})
export default router