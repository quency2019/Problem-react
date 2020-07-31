import { sqlQuery } from "./db"

// 添加标签
export async function insertTags(obj) {
    const { tag, ctime, utime } = obj
    const sql = 'insert into tags(`tag`,`ctime`,`utime`) values (?,?,?)'
    const params = [tag, ctime, utime]

    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }
}

// 搜索标签
export async function findTags(tagName) {

    const sql = 'select * from tags where tag=?'
    const params = [tagName]

    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }
}
// 得到全部标签
export async function findAllTags() {

    const sql = 'select * from tags'
    try {
        const result = await sqlQuery(sql)
        return result
    } catch (error) {
        console.log(error)
    }
}
//  删除标签
export async function deleteTags(problem_id) {

    const sql = 'delete from tags where problem_id=?'
    const params = [problem_id]

    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }
}

export default {
    findTags,
    insertTags,
    deleteTags,
    findAllTags
}

