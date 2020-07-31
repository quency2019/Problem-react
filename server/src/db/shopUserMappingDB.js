import { sqlQuery } from "./db"


// 添加shop和user映射
export async function insertShopUserMapping(obj) {

    const { user_id, shop_id, ctime, utime } = obj
    const sql = 'insert into shop_user_mapping(`user_id`,`shop_id`,`ctime`,`utime`) values (?,?,?,?)'
    const params = [user_id, shop_id, ctime, utime]

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
    const sql = 'select * from shop_user_mapping where user_id=? '
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
// 按shop id查询 
export async function searchByShop(shop_id) {
    const sql = 'select * from shop_user_mapping where shop_id=? '
    const params = [shop_id]
    try {
        const result = await sqlQuery(sql, params)
        if (!result.message) {
            return result
        }

    } catch (error) {
        console.log(error)
    }
}

// 按id删除shopUserMapping
export async function deleteShopUserMapping(id) {
    console.log(id);
    var sql = "delete from shopUserMapping where id = ?;";
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
    insertShopUserMapping,
    searchByShop,
    searchByUser,

    deleteShopUserMapping
}