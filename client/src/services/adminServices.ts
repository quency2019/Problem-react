import axios from 'axios'
import { IResponse } from './commonType';
import { ISearchCondition } from './userServices';


export interface IAdmin {
    id?: number,
    admin_name: string,
    admin_pwd: string,


}
export interface IEditAdmin {
    id?: number,
    admin_name: string,
    admin_pwd: string,

}



export class AdminService {
    //添加管理员
    public static async add(admin: IAdmin): Promise<IResponse<IAdmin>> {
        const res = await axios.post("/api/admin/add", admin)
        return res.data

    }
    //验证管理员
    public static async vilidation(admin: IEditAdmin): Promise<IResponse<IAdmin>> {
        const res = await axios.post("/api/admin/find", admin)
        return res.data

    }
    //删除管理员
    public static async delete(id: number): Promise<IResponse<IAdmin>> {
        const res = await axios.delete("/api/admin/delete/" + id)
        return res.data

    }
    // 修改管理员密码
    public static async editPwd(id: number, admin: IEditAdmin): Promise<IResponse<IAdmin>> {
        const res = await axios.put("/api/admin/" + id, admin)
        return res.data

    }


    // 分页查找管理员
    public static async find(condition: ISearchCondition): Promise<IResponse<IAdmin>> {
        const res = await axios.get("/api/admin/", {
            params: condition
        })
        console.log(res)
        return res.data

    }
    // id查找管理员
    public static async findById(id: number): Promise<IResponse<IAdmin>> {
        const res = await axios.get("/api/admin/" + id)
        return res.data

    }
}
