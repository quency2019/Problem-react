import { sqlQuery } from "./db"

import { getNowTime } from "../utils/getTime"
import { TagProblemMappingDB, TagsDB } from './db'


// 添加problem 同时添加tag 和 tag problem 映射表
export async function insertProblem(obj) {
    let { title, content, views, love, good, tags, ctime, utime } = obj

    const sql = 'insert into problem(`title`,`content`,`views`,`love`,`good`,`tags`,`ctime`,`utime`) values (?,?,?,?,?,?,?,?)'
    const params = [title, content, views, love, good, tags, ctime, utime]

    try {
        const result = await sqlQuery(sql, params)
        console.log(result, "result");
        if (!result.message) {
            //  获得problem id
            const problem_id = result.insertId

            // 字符串标签按，分割成数据遍历

            tags.split(",").forEach(async (ele) => {
                console.log(ele)

                //查看标签表中是否有数据
                const findTagsResult = await TagsDB.findTags(ele)
                //没有便签 则先创建一个新标签 在根据返回的创建标签ID 和上面的problem ID 创建映射表
                if (!findTagsResult[0]) {
                    const obj1 = {
                        tag: ele,
                        utime: getNowTime(),
                        ctime: getNowTime(),
                    }
                    const res = await TagsDB.insertTags(obj1)
                    const tag_id = res.insertId

                    const obj2 = {
                        tag_id: tag_id,
                        problem_id: problem_id,
                        utime: getNowTime(),
                        ctime: getNowTime(),
                    }
                    await TagProblemMappingDB.insertTagProblemMapping(obj2)
                } else {
                    //有便签 则直接根据查询之后的标签ID 和上面的problem ID 创建映射表
                    const obj3 = {
                        tag_id: findTagsResult[0].id,
                        problem_id: problem_id,
                        utime: getNowTime(),
                        ctime: getNowTime(),
                    }
                    await TagProblemMappingDB.insertTagProblemMapping(obj3)
                }

            });
            return ""
        }

    } catch (error) {
        console.log(error)
        if (error.code === 'ER_DATA_TOO_LONG') {
            return "文件太大了"
        }
    }
}
// 修改problem 同时修改tag 和 tag problem 映射表
export async function updateProblem(obj) {
    let { id, title, content, tags, utime } = obj

    const sql = 'update problem set title=?,content=?,tags=?, utime=? where id=?'
    const params = [title, content, tags, utime, id]

    try {
        const result = await sqlQuery(sql, params)

        if (!result.message) {
            //  problem id
            const problem_id = id

            // 按problem_id删除 tag表 和 mapping 表
            await TagsDb.deleteTags(problem_id)
            await TagProblemMappingDB.deleteMapping(problem_id)


            // 字符串标签按，分割成数据遍历


            tags.split(",").forEach(async (ele) => {
                console.log(ele)

                //查看标签表中是否有数据
                const findTagsResult = await findTags(ele)
                //没有便签 则先创建一个新标签 在根据返回的创建标签ID 和上面的problem ID 创建映射表
                if (!findTagsResult[0]) {
                    const obj1 = {
                        tag: ele,
                        utime: getNowTime(),
                        ctime: getNowTime(),
                    }
                    const res = await TagsDB.insertTags(obj1)
                    const tag_id = res.insertId

                    const obj2 = {
                        tag_id: tag_id,
                        problem_id: problem_id,
                        utime: getNowTime(),
                        ctime: getNowTime(),
                    }
                    await TagProblemMappingDB.insertTagProblemMapping(obj2)
                } else {
                    //有便签 则直接根据查询之后的标签ID 和上面的problem ID 创建映射表
                    const obj3 = {
                        tag_id: findTagsResult[0].id,
                        problem_id: problem_id,
                        utime: getNowTime(),
                        ctime: getNowTime(),
                    }
                    await TagProblemMappingDB.insertTagProblemMapping(obj3)
                }

            });
            return ""
        }

    } catch (error) {
        console.log(error)

    }
}
// 按id删除problem 
export async function deleteProblem(id) {
    console.log(id);
    var sql = "delete from problem where id = ?;";
    var params = [id];
    try {
        const result = await sqlQuery(sql, params)
        console.log(result);
        return result
    } catch (error) {
        console.log(error)
    }
}

//按照查询条件查询problem 
export async function searchProblemByPage(obj) {
    console.log(obj, "searchProblemByPage");

    let { page, limit } = obj

    const sql = 'select * from problem order by id desc limit ?,?'
    const params = [(page - 1) * limit, limit]
    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }

}

// 按照problem id查询problem 
export async function searchProblemById(id) {
    console.log(id, "searchProblemById");

    const sql = 'select * from problem where id=?'
    const params = [id]
    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }

}
// 获得problem 总数
export async function searchProblemCount() {
    const sql = 'select count(1) as count from problem'
    try {
        const result = await sqlQuery(sql)

        return result


    } catch (error) {
        console.log(error)
    }
}
//增加浏览次数
export async function addViews(id) {
    var sql = "update problem set views = views + 1 where id = ?;";
    var params = [id];
    try {
        const result = await sqlQuery(sql, params)

        return result


    } catch (error) {
        console.log(error)
    }
}
//增加点赞次数
export async function addGood(id) {
    var sql = "update problem set good = good + 1 where id = ?;";
    var params = [id];
    try {
        const result = await sqlQuery(sql, params)

        return result


    } catch (error) {
        console.log(error)
    }
}
//增加喜欢次数
export async function addLove(id) {
    var sql = "update problem set love = love + 1 where id = ?;";
    var params = [id];
    try {
        const result = await sqlQuery(sql, params)

        return result


    } catch (error) {
        console.log(error)
    }
}
//减少点赞次数
export async function reduceGood(id) {
    var sql = "update problem set good = good - 1 where id = ?;";
    var params = [id];
    try {
        const result = await sqlQuery(sql, params)

        return result


    } catch (error) {
        console.log(error)
    }
}
//减少喜欢次数
export async function reduceLove(id) {
    var sql = "update problem set love = love - 1 where id = ?;";
    var params = [id];
    try {
        const result = await sqlQuery(sql, params)

        return result


    } catch (error) {
        console.log(error)
    }
}
// 得到热门problem 
export async function searchHotProblem(size) {
    var sql = "select * from problem order by views desc limit ?;";
    var params = [size];

    try {
        const result = await sqlQuery(sql, params)

        return result


    } catch (error) {
        console.log(error)
    }
}
// 得到热门problem 
export async function searchNewProblem(size) {
    var sql = "select * from problem order by ctime desc limit ?;";
    var params = [size];

    try {
        const result = await sqlQuery(sql, params)

        return result


    } catch (error) {
        console.log(error)
    }
}
// title content tags  模糊查询
export async function searchProblemBySearch(obj) {
    console.log(obj, "searchProblemBySearch");
    const { page, limit, search } = obj
    var sql = "select * from problem where title like concat(concat('%', ?), '%') or content like concat(concat('%', ?), '%')or tags like concat(concat('%', ?), '%') limit ?,?;";
    var params = [search, search, search, (page - 1) * limit, limit];
    try {
        const result = await sqlQuery(sql, params)
        console.log(result);

        return result


    } catch (error) {
        console.log(error)
    }
}

// 得到模糊查询总数
export async function searchProblemBySearchCount(search) {
    var sql = "select count(1) as count from problem where title like \"%?%\" or content like \"%?%\";";
    var params = [search, search];
    try {
        const result = await sqlQuery(sql, params)

        return result


    } catch (error) {
        console.log(error)
    }
}

export default {
    reduceGood, reduceLove, insertProblem, deleteProblem, searchProblemByPage, addViews, addGood, addLove, searchHotProblem, searchNewProblem, searchProblemById, searchProblemCount, searchProblemBySearchCount, searchProblemBySearch, updateProblem
}