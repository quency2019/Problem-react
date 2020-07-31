import { AdminDB } from "../db/db";
import { writeResult } from '../utils/resultHelper'
import { getNowTime } from "../utils/getTime";

export class AdminService {
    //根据id查找管理员
    static async findAdminById(id) {
        id = Number(id)

        const res = await AdminDB.findAdminById(id)
        return res
    }
    //根据id修改管理员
    static async editAdminById(id, admin) {
        admin.id = Number(id);

        admin.utime = getNowTime();
        const reg = /^\w{6,18}$/;
        if (!reg.test(admin.admin_pwd)) {
            return writeResult("error", "管理员用户名和密码必须是6-18位的字母数字及下划线", '')
        }

        const res = await AdminDB.updataAdminById(admin)
        return writeResult("success", "修改成功", '')
    }
    //验证密码是否正确
    static async findAdmin(admin) {
        const { admin_name, admin_pwd } = admin
        const res = await AdminDB.findAdminName(admin_name)
        console.log(res, '管理员信息');
        let result
        if (res.length === 0) return result = writeResult("error", "帐号不存在", '')
        if (res[0].admin_pwd === admin_pwd) {
            result = writeResult("success", "信息正确", result)
        } else {
            result = writeResult("error", "密码错误", '')
        }
        return result
    }

    //添加管理员
    static async addAdmin(admin) {

        try {

            const res = await AdminDB.findAdminName(admin.admin_name)
            console.log(res, "查找管理员");
            if (res.length) {
                return writeResult("error", "管理员用户名已经存在", '')
            }
            const reg = /^\w{6,18}$/;
            for (const key in admin) {
                console.log(reg.test(admin[key]));
                if (!reg.test(admin[key])) {
                    return writeResult("error", "管理员用户名和密码必须是6-18位的字母数字及下划线", '')
                }
            }
            admin.ctime = getNowTime()
            admin.utime = getNowTime()
            const result = await AdminDB.insertAdmin(admin)
            return writeResult("success", "添加成功", result)
        } catch (error) {
            console.log(error)

        }


    }

    //添加管理员
    static async editAdmin(id, admin) {

        try {
            const reg = /^\w{6,18}$/;
            for (const key in admin) {
                if (!reg.test(admin[key])) {
                    return writeResult("error", "管理员密码必须是6-18位的字母数字及下划线", '')
                }
            }
            admin.utime = getNowTime()
            const result = await AdminDB.insertAdmin(admin)
            return writeResult("success", "添加成功", result)
        } catch (error) {
            console.log(error)

        }


    }

    //按页查询管理员
    static async FindByCondition(obj) {

        obj.page = Number(obj.page)
        obj.limit = Number(obj.limit)
        const res = await AdminDB.searchAdminByPage(obj)
        const count = await AdminService.getCount()


        const result = writeResult("success", "查询成功", { result: res, count: count.data[0].count })
        return result
    }

    // 获得管理员 总数
    static async getCount() {
        const res = await AdminDB.searchAdminCount()
        const result = writeResult("success", "查询成功", res)
        return result
    }
}
