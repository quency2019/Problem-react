import { sqlQuery } from "./db"

//添加管理员
export async function insertAdmin(admin) {
    console.log(admin)
    const { admin_name, admin_pwd, ctime, utime } = admin

    const sql = 'insert into admin(`admin_name`,`admin_pwd`,`ctime`,`utime`) values(?,?,?,?)'
    const params = [admin_name, admin_pwd, ctime, utime]
    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }

}
//修改管理员密码
export async function updataAdminById(admin) {
    const { id, admin_pwd, utime } = admin
    console.log(typeof id, typeof admin_pwd, typeof utime);
    const sql = 'update admin set admin_pwd=?,utime=? where id=?'
    const params = [admin_pwd, utime, id]
    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }


}

//查询管理员 admin_name 唯一
export async function findAdminName(admin_name) {

    const sql = 'select * from admin where admin_name = ?'
    const params = [admin_name]
    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }

}

export async function findAdminById(id) {

    const sql = 'select * from admin where id = ?'
    const params = [id]
    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }

}
//按照查询条件查询管理员
export async function searchAdminByPage(obj) {

    let { page, limit } = obj

    const sql = 'select * from admin order by id desc limit ?,?'
    const params = [(page - 1) * limit, limit]
    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }

}
// 获得admin 总数
export async function searchAdminCount() {
    const sql = 'select count(1) as count from admin'
    try {
        const result = await sqlQuery(sql)

        return result


    } catch (error) {
        console.log(error)
    }
}

export default {
    insertAdmin,
    findAdminName,
    findAdminById,
    updataAdminById,
    searchAdminByPage


}