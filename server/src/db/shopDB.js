import { sqlQuery, UserDB } from "./db"
import { getNowTime } from "../utils/getTime"

//添加题库
export async function insertShop(shop) {
    const { user_id, shop_tag_name, shop_content, ctime, utime } = shop


    const sql = 'insert into shop(`user_id`,`shop_tag_name`,`shop_content`,`ctime`,`utime`) values(?,?,?,?,?)'
    const params = [user_id, shop_tag_name, shop_content, ctime, utime]
    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }

}

//id查询用户题库 
export async function findShop(id) {
    console.log(id);

    const sql = 'select * from shop where id = ?'
    const params = [id]
    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }

}
//user_id查询用户题库 
export async function findShopByUserId(id) {

    const sql = 'select * from shop where user_id = ?'
    const params = [id]
    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }

}

//编辑用户题库 内容
export async function updateShopContent(shopInfo) {
    const { id, content, utime } = shopInfo


    const sql = 'update shop set content=?,utime=? where id=?'


    const params = [content, utime, id]
    try {
        const result = await sqlQuery(sql, params)

        return result

    } catch (error) {
        console.log(error)
    }

}
//编辑用户题库 名称
export async function updateShopName(shopInfo) {
    const { id, user_id, shop_tag_name, utime } = shopInfo


    const sql = 'update shop set shop_tag_name=?,utime=? where id=?'
    const params = [shop_tag_name, utime, id]
    try {
        const result = await sqlQuery(sql, params)
        const res = await findShop(user_id)

        let tags_name = ''
        for (let i = 0; i < res.length; i++) {
            tags_name += res[i].shop_tag_name;
        }
        const userInfo = {
            id: user_id,
            shop_tags_name: tags_name,
            utime: getNowTime()
        }
        await UserDB.updateUserTags(userInfo)

        return

    } catch (error) {
        console.log(error)
    }

}

//删除题库
export async function deleteShop(shopInfo) {
    const { id, user_id } = shopInfo
    const sql = 'delete from shop where id=?'
    const params = [id]
    try {
        const result = await sqlQuery(sql, params)
        const res = findShop(user_id)

        let tags_name = ''
        for (let i = 0; i < res.length; i++) {
            tags_name += res[i].shop_tag_name;
        }
        const userInfo = {
            id: user_id,
            shop_tags_name: tags_name,
            utime: getNowTime()
        }
        await UserDB.updataUserTags(userInfo)

        return

    } catch (error) {
        console.log(error)
    }

}

export default {

    insertShop,
    findShop,
    findShopByUserId,
    updateShopName,
    deleteShop
}
