import axios from 'axios'
import { IResponse } from './commonType';
import { ISearchCondition } from './userServices';


export interface IShop {
    id?: number,
    user_id: number,
    shop_tag_name: string,
    shop_content: string,

}
export interface IEditShop {
    id?: number,
    user_id?: number,
    shop_tag_name?: string,
    shop_content?: string,
}



export class ShopService {
    //添加题库
    public static async add(shop: IShop): Promise<IResponse<IShop>> {
        console.log(shop, "add");
        const res = await axios.post("/api/shop/add", shop)
        return res.data

    }

    // id查找题库
    public static async findById(id: number): Promise<IResponse<IShop>> {
        const res = await axios.get("/api/shop/shop/" + id)
        return res.data

    }
    // user_id查找题库
    public static async findByUserId(id: number): Promise<IResponse<IShop>> {
        const res = await axios.get("/api/shop/user_id/" + id)
        return res.data

    }
    //删除题库
    public static async delete(id: number): Promise<IResponse<IShop>> {
        const res = await axios.delete("/api/shop/delete/" + id)
        return res.data

    }
    // 修改题库
    public static async editshop(id: number, shop: IEditShop): Promise<IResponse<IShop>> {
        const res = await axios.put("/api/shop/" + id, shop)
        return res.data

    }


    // 分页查找题库
    public static async find(condition: ISearchCondition): Promise<IResponse<IShop>> {
        const res = await axios.get("/api/shop/", {
            params: condition
        })
        console.log(res)
        return res.data

    }

}
