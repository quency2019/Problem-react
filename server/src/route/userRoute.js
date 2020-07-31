import express from 'express'
import { UserService } from '../Service/userService'
const router = express.Router()

// 通过id获取到用户
router.get('/findById/:id', async (req, res) => {
    const result = await UserService.findById(req.params.id)
    console.log(result)
    res.send(result)

})
// 按页查询用户
router.get('/byPage', async (req, res) => {
    const result = await UserService.FindByCondition(req.query)
    res.send(result)

})
//添加用户
router.post('/add', async (req, res) => {
    const result = await UserService.add(req.body)
    console.log(result)
    res.send(result)

})
//删除用户
router.delete('/delete/:id', async (req, res) => {
    console.log(req.params.id);
    const result = await UserService.delete(req.params.id)
    console.log(result)
    res.send(result)

})


// 得到用户名 密码 验证信息
router.post('/find', async (req, res) => {
    const result = await UserService.find(req.body)
    console.log(result)
    res.send(result)

})
// 得到用户名 验证信息
router.post('/findByName', async (req, res) => {
    console.log(req.body);
    const result = await UserService.findByName(req.body)
    console.log(result)
    res.send(result)

})
// 修改用户名 密码 
router.put('/:id', async (req, res) => {
    const result = await UserService.editPwd(req.params.id, req.body)
    console.log(result)
    res.send(result)

})
// 修改用户头像
router.put('/photo/:id', async (req, res) => {
    console.log(req.params.id, req.body);
    const result = await UserService.editPhoto(req.params.id, req.body)
    console.log(result)
    res.send(result)

})
// 修改用户购物车
router.put('/shopping/:id', async (req, res) => {
    const result = await UserService.editShopping(req.params.id, req.body)
    console.log(result)
    res.send(result)

})
// // 修改用户题目名
// router.put('/shop_tags_name/:id', async (req, res) => {
//     const result = await UserService.editShopTags(req.params.id, req.body)
//     console.log(result)
//     res.send(result)

// })
export default router