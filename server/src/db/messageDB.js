import { sqlQuery } from "./db"

// 添加评论信息
export async function insertMessage(obj) {
    const { problem_id, user_id, user_name, message, ctime, utime } = obj
    console.log(obj);
    const sql = 'insert into message(`problem_id`,`user_id`,`user_name`,`message`,`ctime`,`utime`) values (?,?,?,?,?,?)'
    const params = [problem_id, user_id, user_name, message, ctime, utime]

    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }
}
// update评论信息
export async function updateMessage(obj) {
    const { id, message, utime } = obj
    const sql = 'update message set message=?, utime=? where id=?'
    const params = [message, utime, id]

    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }
}

//倒序得到 size条评论信息
export async function searchMessage(size) {


    const sql = 'select * from message order by ctime desc limit ?'
    const params = [size]
    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }

}
//通过 id  获取到评论信息
export async function searchMessageById(id) {


    const sql = 'select * from message where id = ?'
    const params = [id]
    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }

}
//通过problem id  获取到评论信息
export async function searchMessageByProblemId(problemId) {


    const sql = 'select * from message where problem_id = ?'
    const params = [problemId]
    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }

}
//通过problem id  获取到评论总数
export async function searchMessageCountByProblemId(problem_id) {


    const sql = 'select count(1) as count from message where problem_id = ?'
    const params = [problem_id]
    try {
        const result = await sqlQuery(sql, params)
        return result[0].count
    } catch (error) {
        console.log(error)
    }

}
//通过problem id  获取到评论searchProblemByPage
export async function searchMessageByProblemIdAndPage(obj) {

    let { page, limit, problem_id } = obj


    const sql = 'select * from message where problem_id=? order by ctime desc limit ?,?'
    const params = [problem_id, (page - 1) * limit, limit]
    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }

}
// 得到所有的评论总数
export async function getMessageCount() {

    const sql = 'select count(1) as count from message'

    try {
        const result = await sqlQuery(sql)
        return result
    } catch (error) {
        console.log(error)
    }

}

// export async function searchNewMessage(size) {
//     var sql = "select * from message order by id desc limit ?;";
//     var params = [size];
//     try {
//         const result = await sqlQuery(sql, params)
//         return result
//     } catch (error) {
//         console.log(error)
//     }
// }

export default {
    insertMessage,
    searchMessage,
    searchMessageByProblemId,
    searchMessageCountByProblemId,
    searchMessageByProblemIdAndPage,
    searchMessageById

}