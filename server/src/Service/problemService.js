import { ProblemDB, ProblemUserMappingDB, TagsDB, TagProblemMappingDB } from "../db/db";
import { writeResult } from '../utils/resultHelper'
import { getNowTime } from "../utils/getTime";
import problemDB from "../db/problemDB";
export class ProblemService {
    //增加problem
    static async add(obj) {
        obj.tags = obj.tags.replace(/ /g, "").replace("，", ",")
        obj.views = Number(obj.views)
        obj.love = Number(obj.love)
        obj.good = Number(obj.good)
        obj.ctime = getNowTime()
        obj.utime = getNowTime()
        const res = await ProblemDB.insertProblem(obj)
        let result
        if (res) {
            result = writeResult("error", "添加失败", res)
        }
        result = writeResult("success", "添加成功", '')
        return result
    }
    //修改problem
    static async edit(id, obj) {
        obj.id = Number(id)
        obj.tags = obj.tags.replace(/ /g, "").replace("，", ",")
        obj.utime = getNowTime()
        await ProblemDB.updateProblem(obj)
        const result = writeResult("success", "修改成功", "")
        return result
    }
    // 按id删除problem 
    static async delete(id) {
        id = Number(id)
        console.log(id);
        const res = await ProblemDB.deleteProblem(id)
        const result = writeResult("success", "删除成功", "")
        return result
    }
    //按页查询problem
    static async FindByCondition(obj) {
        //字符串转换成数字
        obj.page = Number(obj.page)
        obj.limit = Number(obj.limit)
        const res = await ProblemDB.searchProblemByPage(obj)
        const count = await ProblemService.getCount()
        // result[i].content = result[i].content.replace(/<[a-zA-Z]+>/g, "");
        // result[i].content = result[i].content.replace(/<\/[a-zA-Z]+>/g, "");
        // result[i].content = result[i].content.replace(/<img src="data:image\/jpeg;[\w\W]+>/g, "");
        // for (let i = 0; i < res.length; i++) {
        //     //过滤图片
        //     res[i].content = res[i].content.replace(/<img[\w\W]*">/, "")
        //     // res[i].content = res[i].content.replace(/<img[\w\W]*">/, "").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        //     //过滤标签
        //     res[i].content = res[i].content.replace(/<[\w\W]{1,5}>/g, "")
        //     //限制字数300
        //     res[i].content = res[i].content.substring(0, 300)
        // }
        obj.content = obj.content.replace(/<img[\w\W]*">/, "").replace(/</g, "&lt").replace(/>/g, "&gt")

        const result = writeResult("success", "查询成功", { result: res, count: count.data[0].count })
        return result
    }
    //按页 search 查询problem
    static async FindBySearch(obj) {
        //字符串转换成数字
        console.log(obj, "FindBySearch");
        obj.page = Number(obj.page)
        obj.limit = Number(obj.limit)
        let result
        let count
        if (obj.search === "") {
            console.log(obj, 'searchProblemByPage');
            const res = await ProblemDB.searchProblemByPage(obj)
            const count1 = await ProblemService.getCount()
            result = res;
            count = count1.data[0].count
        } else {
            const res = await ProblemDB.searchProblemBySearch(obj)
            let count1
            if (res.length === 0) {
                count1 = 0
            } else {
                count1 = await problemDB.searchProblemBySearchCount(obj)
                count = count1.data[0].count
            }

            result = res;

        }

        // for (let i = 0; i < res.length; i++) {
        //     res[i].content = res[i].content.replace(/<img[\w\W]*">/, "").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        // }
        // obj.content = obj.content.replace(/<img[\w\W]*">/, "").replace(/</g, "&lt").replace(/>/g, "&gt")

        const result2 = writeResult("success", "查询成功", { result, count })
        console.log(result2);
        return result2
    }
    // 按id查询problem 
    static async FindById(id) {
        id = Number(id)
        console.log(id, "id");
        const res = await ProblemDB.searchProblemById(id)
        const result = writeResult("success", "查询成功", res)
        return result
    }
    // 获得最新problem 
    static async getNewProblem(size) {
        size = Number(size)
        console.log(size, "size")
        const res = await ProblemDB.searchNewProblem(size);
        const result = writeResult("success", "查询成功", res);
        return result
    }
    // 获得热门problem 
    static async getHotProblem(size) {
        size = Number(size)
        const res = await ProblemDB.searchHotProblem(size)
        const result = writeResult("success", "查询成功", res)
        return result
    }
    // 获得problem 总数
    static async getCount() {
        const res = await ProblemDB.searchProblemCount()
        const result = writeResult("success", "查询成功", res)
        return result
    }
    //增加浏览次数
    static async addViews(id) {
        id = Number(id)
        const res = await ProblemDB.addViews(id)
        const result = writeResult("success", "添加成功", "")
        return result
    }
    //增加减少点赞次数 //id===problem_id
    static async editGood(id, user_id) {
        id = Number(id)

        const re = await ProblemUserMappingDB.searchByProblem(id)


        delete re.ctime
        const re1 = re.find(i => i.user_id === user_id)

        if (re1 && (re1.good === 0 || re1.love === 0 || re1.good === 1 || re1.love === 1)) {
            let result

            if (re1.good === 1) {
                const res = await ProblemDB.reduceGood(id)
                const newM = { ...re1, good: 0, utime: getNowTime() }
                await ProblemUserMappingDB.updateProblemUserMapping(newM)
                result = writeResult("success", "减少成功", "")
            } else {
                const res = await ProblemDB.addGood(id)
                const newM = { ...re1, good: 1, utime: getNowTime() }

                await ProblemUserMappingDB.updateProblemUserMapping(newM)
                result = writeResult("success", "增加成功", "")
            }

            return result
        } else {
            const res = await ProblemDB.addGood(id)

            const obj = {
                problem_id: id,
                user_id: user_id,
                good: 1,
                love: 0,
                ctime: getNowTime(),
                utime: getNowTime()
            }
            await ProblemUserMappingDB.insertProblemUserMapping(obj)
            const result = writeResult("success", "增加成功", "")
            return result
        }


    }
    //增加减少喜欢次数
    static async editLove(id, user_id) {
        id = Number(id)
        const re = await ProblemUserMappingDB.searchByProblem(id)


        delete re.ctime
        const re1 = re.find(i => i.user_id === user_id)


        if (re1 && (re1.good === 0 || re1.love === 0 || re1.good === 1 || re1.love === 1)) {
            console.log(re1, "re1");
            let result;
            if (re1.love === 1) {
                const res = await ProblemDB.reduceLove(id)
                const newM = { ...re1, love: 0, utime: getNowTime() }
                await ProblemUserMappingDB.updateProblemUserMapping(newM)
                result = writeResult("success", "减少成功", "")
            } else {
                const res = await ProblemDB.addLove(id)
                const newM = { ...re1, love: 1, utime: getNowTime() }
                await ProblemUserMappingDB.updateProblemUserMapping(newM)
                result = writeResult("success", "增加成功", "")
            }

            return result
        } else {
            const res = await ProblemDB.addLove(id)
            const obj = {
                problem_id: id,
                user_id: user_id,
                good: 0,
                love: 1,
                ctime: getNowTime(),
                utime: getNowTime(),
            }
            await ProblemUserMappingDB.insertProblemUserMapping(obj)
            const result = writeResult("success", "增加成功", "")
            return result
        }


    }

    // 获得problem 总数
    static async getAllTags() {
        const res = await TagsDB.findAllTags()
        const result = writeResult("success", "查询成功", res)
        return result
    }
    static async getByTagId(id, obj) {
        //字符串转换成数字
        obj.page = Number(obj.page)
        obj.limit = Number(obj.limit)
        const res = await TagProblemMappingDB.searchByTag(id, obj)
        const count = await TagProblemMappingDB.searchByTagCount(id)


        const result = writeResult("success", "查询成功", { result: res, count: count.data[0].count })
        return result
    }

} 
