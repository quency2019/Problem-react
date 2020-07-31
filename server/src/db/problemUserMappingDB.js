import { sqlQuery } from "./db"


// 添加problem和user映射
export async function insertProblemUserMapping(obj) {

    const { user_id, problem_id, love, good, ctime, utime } = obj
    const sql = 'insert into problem_user_mapping(`user_id`,`problem_id`,`love`,`good`,`ctime`,`utime`) values (?,?,?,?,?,?)'
    const params = [user_id, problem_id, love, good, ctime, utime]

    try {
        const result = await sqlQuery(sql, params)
        if (!result.message) {
            return result
        }

    } catch (error) {
        console.log(error)
    }
}
// 按Problem id查询 
export async function searchByProblem(problem_id) {
    const sql = 'select * from problem_user_mapping where problem_id=? '
    const params = [problem_id]
    try {
        const result = await sqlQuery(sql, params)
        if (!result.message) {
            return result
        }

    } catch (error) {
        console.log(error)
    }
}
// 按user id查询 
export async function searchByUser(user_id) {
    const sql = 'select * from problem_user_mapping where user_id=? '
    const params = [user_id]
    try {
        const result = await sqlQuery(sql, params)
        if (!result.message) {
            return result
        }

    } catch (error) {
        console.log(error)
    }
}
//编辑 内容
export async function updateProblemUserMapping(info) {
    const { id, user_id, problem_id, love, good, utime } = info
    console.log(id, user_id, problem_id, love, good, "updateProblemUserMapping");


    const sql = 'update problem_user_mapping set user_id=?, problem_id=?, love=?, good=?, utime=? where id=?'


    const params = [user_id, problem_id, love, good, utime, id]
    try {
        const result = await sqlQuery(sql, params)

        return result

    } catch (error) {
        console.log(error)
    }

}
// 按id删除ProblemUserMapping
export async function deleteProblemUserMapping(id) {
    console.log(id);
    var sql = "delete from problem_user_mapping where id = ?;";
    var params = [id];
    try {
        const result = await sqlQuery(sql, params)
        console.log(result);
        return result
    } catch (error) {
        console.log(error)
    }
}

export default {
    updateProblemUserMapping,
    searchByUser,
    searchByProblem,
    insertProblemUserMapping,
    deleteProblemUserMapping
}