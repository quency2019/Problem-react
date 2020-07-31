import express from 'express'
import { ProblemService } from '../service/problemService'
const router = express.Router()

// 按页查询problem
router.get('/byCondition', async (req, res) => {
    const result = await ProblemService.FindByCondition(req.query)
    res.send(result)

})
// 按页 search 查询problem
router.get('/bySearch', async (req, res) => {
    console.log(req.query);
    const result = await ProblemService.FindBySearch(req.query)
    res.send(result)

})
// 得到最新problem
router.get('/new', async (req, res) => {
    const result = await ProblemService.getNewProblem(req.query.size)
    res.send(result)

})
// 得到热门problem
router.get('/hot', async (req, res) => {
    const result = await ProblemService.getHotProblem(req.query.size)
    res.send(result)

})
// 得到tag
router.get('/tags', async (req, res) => {
    const result = await ProblemService.getAllTags()
    res.send(result)

})
// 添加problem
router.post('/add', async (req, res) => {

    const result = await ProblemService.add(req.body)

    res.send(result)

})
// 修改problem
router.put('/:id', async (req, res) => {

    const result = await ProblemService.edit(req.params.id, req.body)

    res.send(result)

})
// 按ID删除problem

router.delete('/:id', async (req, res) => {
    const result = await ProblemService.delete(req.params.id)

    res.send(result)
})
// 按ID查询problem
router.get('/:id', async (req, res) => {
    const result = await ProblemService.FindById(req.params.id)
    res.send(result)


})
// 添加浏览次数
router.put('/addViews/:id', async (req, res) => {
    const result = await ProblemService.addViews(req.params.id)
    res.send(result)

})
// 修改喜欢次数
router.put('/editLove/:id', async (req, res) => {
    console.log(req.body, "req.body");
    const result = await ProblemService.editLove(req.params.id, req.body.params.user_id)
    res.send(result)

})
//修改点赞次数
router.put('/editGood/:id', async (req, res) => {
    const result = await ProblemService.editGood(req.params.id, req.body.params.user_id)
    res.send(result)

})

export default router