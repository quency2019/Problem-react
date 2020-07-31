import { writeResult } from '../utils/resultHelper'
import { UserDB } from '../db/db'
import { getNowTime } from "../utils/getTime";

export class UserService {
    static async findById(id) {
        id = Number(id)
        const res = await UserDB.findUserById(id)
        const result = writeResult("success", "查询成功", res)
        return result
    }
    // static async FindByCondition(obj) {
    //     id = Number(id)
    //     const res = await UserDB.findUserById(id)
    //     const result = writeResult("success", "查询成功", res)
    //     return result
    // }
    static async delete(id) {
        id = Number(id)
        await UserDB.deleteUserById(id)
        const result = writeResult("success", "删除成功", "")
        return result
    }
    static async find(user) {
        const { user_name, user_password } = user
        console.log(user_name, user_password, "user_name, user_pwd ");
        const res = await UserDB.findUserName(user_name)
        let result
        if (res.length === 0) return result = writeResult("error", "帐号不存在", '')
        if (res[0].user_password === user_password) {
            console.log(res[0], "find");
            result = writeResult("success", "信息正确", "")
        } else {
            result = writeResult("error", "密码错误", '')
        }

        return result
    }
    static async findByName(user) {
        console.log(user, "user");
        const { user_name } = user
        const res = await UserDB.findUserName(user_name)
        let result
        console.log(res, "findByName");
        if (res.length === 0) {
            result = writeResult("success", "帐号不存在", '')
        } else {
            result = writeResult("success", "信息正确", res[0])
        }
        return result
    }
    static async add(user) {
        try {
            const res = await UserDB.findUserName(user.user_name)
            if (res.length > 0) {
                return writeResult("error", "用户名已经存在", '')
            }

            const reg = /^\w{6,18}$/;
            if (!reg.test(user.user_name)) {
                return writeResult("error", "用户用户名必须是6-18位的字母数字及下划线", '')
            }
            if (!reg.test(user.user_password)) {
                return writeResult("error", "用户密码必须是6-18位的字母数字及下划线", '')
            }

            user.ctime = getNowTime()
            user.utime = getNowTime()

            const result = await UserDB.insertUser(user)
            return writeResult("success", "添加成功", result)
        } catch (error) {
            console.log(error);

        }

    }
    static async editPwd(id, user) {

        const reg = /^\w{6,18}$/;
        for (const key in user) {
            if (!reg.test(user[key])) {
                return writeResult("error", "用户密码必须是6-18位的字母数字及下划线", '')
            }
        }
        user.id = Number(id)
        user.utime = getNowTime()

        await UserDB.updateUserPwd(user)
        return writeResult("success", "修改成功", '')
    }
    //修改用户头像
    static async editPhoto(id, user) {
        user.id = Number(id)
        user.utime = getNowTime()
        const result = await UserDB.updateUserPhoto(user)
        return writeResult("success", "修改成功", "")
    }
    //修改用户购物车
    static async editShopping(id, obj) {
        obj.id = Number(id)
        obj.utime = getNowTime()
        const res = await UserDB.updateUserShopping(obj)
        const result = writeResult("success", "修改成功", res)
        return result
    }
    //编辑用户题库
    static async editShopTags(id, obj) {
        console.log(obj, "editShopTags");
        obj.id = Number(id)
        obj.utime = getNowTime()
        const res = await UserDB.updateUserTags(obj)
        const result = writeResult("success", "修改成功", res)
        return result
    }


    //按页查询user
    static async FindByCondition(obj) {
        //字符串转换成数字
        console.log(obj, "FindBySearch");
        obj.page = Number(obj.page)
        obj.limit = Number(obj.limit)
        let result
        let count
        if (obj.search === "") {
            console.log(obj, 'searchUserByPage');
            const res = await UserDB.searchUserByPage(obj)
            const count1 = await UserService.getCount()
            result = res;
            count = count1.data[0].count
        } else {
            const res = await UserDB.searchUserBySearch(obj)
            let count1
            if (res.length === 0) {
                count1 = 0
            } else {
                count1 = await UserDB.searchUserBySearchCount(obj)
                count = count1.data[0].count

            }

            result = res;

        }


        const resultEnd = writeResult("success", "查询成功", { result: result, count: count })
        return resultEnd
    }

    // 获得user 总数
    static async getCount() {
        const res = await UserDB.searchUserCount()
        const result = writeResult("success", "查询成功", res)
        return result
    }

}