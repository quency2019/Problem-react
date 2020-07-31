import axios from 'axios'
import { ISearchCondition } from './userServices';
import { IResponse, IResponseByPage, IResponseBySize } from './commonType';

export interface IProblem {
    id?: number,
    title: string,
    content: string,
    views: number,
    love: number,
    good: number,
    tags: string,

}
export interface ITag {
    id: number,
    tag: string,
    ctime: number,
    utime: number
}

export interface IEditProblem {

    title?: string,
    content?: string,
    views?: number,
    love?: number,
    good?: number,
    tags?: string,

}
interface ISearch {
    page: number,
    limit: number,
    search: string,
}

export class ProblemService {
    //按页 search查询problem
    static async FindBySearch(obj: ISearch): Promise<IResponseByPage<IProblem>> {
        console.log(obj);
        const res = await axios.get('/api/problem/bySearch', {
            params: obj
        })
        console.log(res.data);
        return res.data
    }
    //增加problem
    static async add(obj: IProblem): Promise<IResponse<IProblem>> {
        const res = await axios.post('/api/problem/add', obj)

        return res.data
    }
    //修改problem
    static async edit(id: number, obj: IEditProblem): Promise<IResponse<IProblem>> {
        const res = await axios.put('/api/problem/' + id, obj)

        return res.data
    }
    // 按id删除problem 
    static async delete(id: number): Promise<IResponse<IProblem>> {
        console.log(id);
        const res = await axios.delete('/api/problem/' + id)
        return res.data
    }
    //按页查询problem
    static async FindByCondition(obj: ISearchCondition): Promise<IResponseByPage<IProblem>> {
        console.log(obj);
        const res = await axios.get('/api/problem/byCondition', {
            params: obj
        })
        return res.data
    }
    // 得到最新problem
    static async getNew(size: number): Promise<IResponseBySize<IProblem>> {
        console.log(size);
        const res = await axios.get('/api/problem/new', {
            params: { size }
        })
        return res.data
    }
    // 得到热门problem
    static async getHot(size: number): Promise<IResponseBySize<IProblem>> {
        console.log(size);
        const res = await axios.get('/api/problem/hot', {
            params: { size }
        })
        return res.data
    }

    // 得到problem tag
    static async getTags(): Promise<IResponseBySize<ITag>> {

        const res = await axios.get('/api/problem/tags')
        return res.data
    }
    // 按tag 查询
    static async getByTags(tag_name: string): Promise<IResponseBySize<ITag>> {

        const res = await axios.get('/api/problem/byTags',
            {
                params: { tag_name }
            })
        return res.data
    }
    static async getAll(): Promise<IResponseByPage<IProblem>> {
        const res = await ProblemService.FindByCondition({
            limit: 10,
            page: 1
        })
        const result = await ProblemService.FindByCondition({
            limit: res.data.count,
            page: 1
        })

        return result
    }
    // 按id查询problem 
    static async FindById(id: number): Promise<IResponse<IProblem>> {
        const res = await axios.get('/api/problem/' + id)
        return res.data
    }

    //增加浏览次数
    static async addViews(id: number): Promise<IResponse<IProblem>> {
        const res = await axios.put('/api/problem/addViews/' + id)
        return res.data

    }
    //增加点赞次数
    static async editGood(problem_id: number, user_id: number): Promise<IResponse<IProblem>> {
        console.log(problem_id);
        const res = await axios.put('/api/problem/editGood/' + problem_id, {
            params: { user_id }
        })
        return res.data

    }
    //增加喜欢次数
    static async editLove(problem_id: number, user_id: number): Promise<IResponse<IProblem>> {
        console.log(problem_id);
        const res = await axios.put('/api/problem/editLove/' + problem_id, {
            params: { user_id }
        })
        return res.data

    }
    static async viladataProblemUser(problem_id: number, user_id: number): Promise<IResponse<IProblem>> {
        const res = await axios.get('/api/viladataP/' + problem_id, {
            params: { user_id }
        })
        return res.data

    }

}

