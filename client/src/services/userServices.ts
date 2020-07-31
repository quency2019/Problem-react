import axios from 'axios'
import { IResponse } from './commonType';


export interface IUser {
    id?: number,
    user_name: string,
    user_password: string,
    shop_tags_name: string,
    shopping: string,
    photo: string

}
export interface IEditUser {
    id?: number,
    user_name?: string,
    user_password?: string,
    shop_tags_name?: string,
    shopping?: string,
    photo?: string

}

export interface ISearchCondition {
    page: number,
    limit: number,
    search: string
}

export class UserService {
    //添加用户
    public static async add(user: IUser): Promise<IResponse<IUser>> {
        const res = await axios.post("/api/user/add", user)
        return res.data

    }
    //验证用户
    public static async vilidation(user: IEditUser): Promise<IResponse<IUser>> {
        const res = await axios.post("/api/user/find", user)
        return res.data

    }

    //验证用户
    public static async vilidationName(user: IEditUser): Promise<IResponse<IUser>> {
        console.log(user);

        const res = await axios.post("/api/user/findByName", user)
        return res.data

    }
    //删除用户
    public static async delete(id: number): Promise<IResponse<IUser>> {
        const res = await axios.delete("/api/user/delete/" + id)
        return res.data

    }
    // 修改用户密码
    public static async editPwd(id: number, user: IEditUser): Promise<IResponse<IUser>> {
        const res = await axios.put("/api/user/" + id, user)
        return res.data

    }
    //修改用户头像
    public static async editPhoto(id: number, user: IEditUser): Promise<IResponse<IUser>> {
        console.log(id, user);
        const res = await axios.put("/api/user/photo/" + id, user)
        return res.data

    }
    //修改购物车
    public static async editShopping(id: number, user: IEditUser): Promise<IResponse<IUser>> {
        const res = await axios.put("/api/user/shopping/" + id, user)
        return res.data

    }
    //修改题库名
    public static async editShopTag(id: number, user: IEditUser): Promise<IResponse<IUser>> {
        const res = await axios.put("/api/user/shopping/" + id, user)
        return res.data

    }

    // 分页查找用户
    public static async byPage(condition: ISearchCondition): Promise<IResponse<IUser>> {
        console.log(condition);
        const res = await axios.get("/api/user/byPage", {
            params: condition
        })
        console.log(res)
        return res.data

    }
    // id查找用户
    public static async findById(id: number): Promise<IResponse<IUser>> {
        const res = await axios.get("/api/user/findById/" + id)
        return res.data

    }
}

