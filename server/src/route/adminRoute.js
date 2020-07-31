import express from 'express'
import { AdminService } from '../Service/adminService'
const router = express.Router()

// 通过id获取到管理员
router.get('/:id', async (req, res) => {
    const result = await AdminService.findAdminById(req.params.id)
    console.log(result)
    res.send(result)

})
// 按页查询管理员
router.get('/:id', async (req, res) => {
    const result = await AdminService.FindByCondition(req.params.id, req.query)
    res.send(result)

})
//添加管理员
router.post('/add', async (req, res) => {

    console.log(req.body);
    console.log(AdminService, "AdminService")
    const result = await AdminService.addAdmin(req.body)
    console.log(result)
    res.send(result)

})
// 通过id修改管理员
router.put('/:id', async (req, res) => {
    const result = await AdminService.editAdminById(req.params.id, req.body)
    console.log(result)
    res.send(result)

})

// 得到管理员信息 密码 验证信息
router.post('/find', async (req, res) => {
    const result = await AdminService.findAdmin(req.body)
    console.log(result)
    res.send(result)

})
export default router