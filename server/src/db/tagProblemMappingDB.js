import { sqlQuery } from "./db"


// 添加博客和标签映射
export async function insertTagProblemMapping(obj) {

    const { tag_id, problem_id, ctime, utime } = obj
    const sql = 'insert into tag_problem_mapping(`tag_id`,`problem_id`,`ctime`,`utime`) values (?,?,?,?)'
    const params = [tag_id, problem_id, ctime, utime]

    try {
        const result = await sqlQuery(sql, params)
        if (!result.message) {
            return result
        }

    } catch (error) {
        console.log(error)
    }
}
// 按标签查询 该标签下的problem数目
export async function searchByTagCount(tabId) {
    const sql = 'select count(1) as count from  tag_problem_mapping where tab_id=? '
    const params = [tabId]
    try {
        const result = await sqlQuery(sql, params)
        if (!result.message) {
            return result
        }

    } catch (error) {
        console.log(error)
    }
}
// 按标签查询 该标签下的problem
export async function searchByTag(tabId, obj) {
    const { page, limit } = obj
    const sql = 'select * from  tag_problem_mapping where tab_id=? limit ?,?'
    const params = [tabId, (page - 1) * limit, limit]
    try {
        const result = await sqlQuery(sql, params)
        if (!result.message) {
            return result
        }

    } catch (error) {
        console.log(error)
    }
}

//  删除标签
export async function deleteMapping(problem_id) {

    const sql = 'delete from tag_problem_mapping where problem_id=?'
    const params = [problem_id]

    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }
}

export default {
    insertTagProblemMapping,
    searchByTagCount,
    searchByTag
}