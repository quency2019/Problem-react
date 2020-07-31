import { writeResult } from '../utils/resultHelper'
import { ProblemUserMappingDB } from '../db/db';

export class viladataProblemUserService {
    // 按problem_id 查找 problem_user_mapping 表 在按 user_id find 到数据 
    static async viladataProblemUser(problem_id, user_id) {
        problem_id = Number(problem_id)
        user_id = Number(user_id)
        const res = await ProblemUserMappingDB.searchByProblem(problem_id)

        const data = res.find(it => it.user_id === user_id)
        return writeResult("success", "查找成功", data)

    }
}