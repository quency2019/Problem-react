import axios from 'axios'
import { IResponse } from './commonType';
import { ISearchCondition } from './userServices';

export interface IMessage {
    id?: number,
    problem_id: number,
    user_id: number,
    user_name: string,
    message: string,



}
export interface IEditMessage {
    id?: number,
    problem?: number,
    user_id?: number,
    user_name?: string,
    message?: string,

}



export class MessageService {
    //添加留言

    public static async add(message: IMessage): Promise<IResponse<IMessage>> {
        console.log(message);
        const res = await axios.post("/api/message/add", message)
        console.log(res);
        return res.data

    }

    // id查找留言
    public static async findById(id: number): Promise<IResponse<IMessage>> {
        const res = await axios.get("/api/message/message/" + id)
        return res.data

    }
    // // problem id查找留言
    // public static async findByProblemId(id: number): Promise<IResponse<IMessage[]>> {
    //     console.log(id);

    //     const res = await axios.get("/api/message/problem/" + id)
    //     return res.data

    // }
    //删除留言
    public static async delete(id: number): Promise<IResponse<IMessage>> {
        const res = await axios.delete("/api/message/delete/" + id)
        return res.data

    }
    // 修改留言
    public static async editPwd(id: number, message: IEditMessage): Promise<IResponse<IMessage>> {
        const res = await axios.put("/api/message/" + id, message)
        return res.data

    }


    // problem id  分页查找留言
    public static async find(id: number): Promise<IResponse<IMessage>> {
        console.log(id, "find");
        const res = await axios.get("/api/message/problem/" + id, {
            params: {
                limit: 10,
                page: 1
            }
        })
        console.log(res)
        return res.data

    }
    public static async getRandomCode(): Promise<IResponse<any>> {
        console.log('getRandomCode');

        const res = await axios.get("/api/message/getRandomCode")
        console.log(res)
        return res.data

    }

}
