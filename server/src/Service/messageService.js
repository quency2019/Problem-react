
import { writeResult } from '../utils/resultHelper'
import { getNowTime } from "../utils/getTime";
import { MessageDB } from "../db/db";


export class MessageService {
    //增加Message
    static async add(obj) {
        obj.ctime = getNowTime()
        obj.utime = getNowTime()
        const res = await MessageDB.insertMessage(obj)
        const result = writeResult("success", "添加成功", res)
        return result
    }
    //修改Message
    static async edit(id, obj) {
        obj.id = Number(id)
        obj.utime = getNowTime()
        const res = await MessageDB.updataMessage(obj)
        const result = writeResult("success", "修改成功", res)
        return result
    }
    // 按id删除Message 
    static async delete(id) {
        id = Number(id)
        const res = await MessageDB.deleteMessage(id)
        const result = writeResult("success", "删除成功", res)
        return result
    }
    //按页查询Message //通过problem id  获取到评论
    static async FindByCondition(id, obj) {

        //字符串转换成数字
        obj.problem_id = Number(id)
        obj.page = Number(obj.page)
        obj.limit = Number(obj.limit)
        console.log(obj, "obj");
        const data = await MessageDB.searchMessageByProblemIdAndPage(obj)

        const count = await MessageDB.searchMessageCountByProblemId(obj.problem_id)
        console.log(count, "count");
        console.log(data, "data");
        const result = writeResult("success", "查询成功", { data, count })
        return result
    }
    // 按id查询Message 
    static async FindById(id) {
        id = Number(id)
        console.log(id, "FindById");
        const res = await MessageDB.searchMessageById(id)
        const result = writeResult("success", "查询成功", res)
        return result
    }
    // // 按problem id查询Message 
    // static asyncByProblemId(id) {
    //     id = Number(id)
    //     const res = await MessageDB.searchMessageCountByProblemId(id)
    //     const count =await MessageDB.searchMessageByProblemIdAndPage(id)
    //     const result = writeResult("success", "查询成功", res)
    //     return result
    // }

    // 获得Message 总数
    static async getCount() {
        const res = await MessageDB.getMessageCount()
        const result = writeResult("success", "查询成功", res)
        return result
    }


}