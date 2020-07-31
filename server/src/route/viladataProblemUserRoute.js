import express from 'express'
import { viladataProblemUserService } from '../Service/viladataProblemUserService'
const router = express.Router()

// 通过id获取到用户
router.get('/:id', async (req, res) => {
    const result = await viladataProblemUserService.viladataProblemUser(req.params.id, req.query.user_id)
    res.send(result)

})

export default router