import { sqlQuery } from "./db"

//添加用户
export async function insertUser(user) {
    const { user_name, photo, user_password, shop_tags_name, shopping, ctime, utime } = user


    const sql = 'insert into user(`user_name`,`photo`,`user_password`,`shop_tags_name`,`shopping`,`ctime`,`utime`) values(?,?,?,?,?,?,?)'
    const params = [user_name, photo, user_password, shop_tags_name, shopping, ctime, utime]
    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }

}

//查询用户 user_name 唯一
export async function findUserName(user_name) {

    const sql = 'select * from user where user_name = ?'
    const params = [user_name]
    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }

}
//查询用户id
export async function findUserById(id) {

    const sql = 'select * from user where id = ?'
    const params = [id]
    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }

}
//按照查询条件查询用户
export async function searchUserByPage(obj) {

    let { page, limit } = obj

    const sql = 'select * from user order by id desc limit ?,?'
    const params = [(page - 1) * limit, limit]
    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }

}
// 获得user 总数
export async function searchUserCount() {
    const sql = 'select count(1) as count from user'
    try {
        const result = await sqlQuery(sql)

        return result


    } catch (error) {
        console.log(error)
    }
}
//删除用户  id
export async function deleteUserById(id) {

    const sql = 'delete from user where id = ?'
    const params = [id]
    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }

}

//编辑用户头像
export async function updateUserPhoto(userInfo) {
    const { id, photo, utime } = userInfo


    const sql = 'update user set photo=?,utime=? where id=?'
    const params = [photo, utime, id]
    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }

}

//编辑用户标签 
export async function updateUserTags(userInfo) {
    const { id, shop_tags_name, utime } = userInfo


    const sql = 'update user set shop_tags_name=?,utime=? where id=?'
    const params = [shop_tags_name, utime, id]
    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }

}



//编辑用户密码
export async function updateUserPwd(userInfo) {
    const { id, user_password, utime } = userInfo


    const sql = 'update user set user_password=?,utime=? where id=?'
    const params = [user_password, utime, id]
    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }

}
//编辑用户购物车
export async function updateUserShopping(userInfo) {
    const { id, shopping, utime } = userInfo


    const sql = 'update user set shopping=?,utime=? where id=?'
    const params = [shopping, utime, id]
    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }

}
//编辑用户题库名
export async function updateUserShopTags(userInfo) {
    const { id, shopping, utime } = userInfo


    const sql = 'update user set shopping=?,utime=? where id=?'
    const params = [shopping, utime, id]
    try {
        const result = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }

}

// title content tags  模糊查询
export async function searchUserBySearch(obj) {
    console.log(obj, "searchUserBySearch");
    const { page, limit, search } = obj
    var sql = "select * from user where user_name like concat(concat('%', ?), '%') limit ?,?;";
    var params = [search, (page - 1) * limit, limit];
    try {
        const result = await sqlQuery(sql, params)
        console.log(result);

        return result


    } catch (error) {
        console.log(error)
    }
}

// 得到模糊查询总数
export async function searchUserBySearchCount(search) {
    var sql = "select count(1) as count from user where user_name like \"%?%\";";
    var params = [search];
    try {
        const result = await sqlQuery(sql, params)

        return result


    } catch (error) {
        console.log(error)
    }
}
export default {
    insertUser,
    findUserName,
    updateUserTags,
    updateUserPwd,
    updateUserShopping,
    updateUserPhoto,
    findUserById,
    deleteUserById,
    searchUserByPage,
    searchUserBySearch,
    searchUserBySearchCount,
    searchUserCount
}
