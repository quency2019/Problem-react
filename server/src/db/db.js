import mysql from 'mysql'
import ProblemDB from './problemDB'
import MessageDB from './messageDB'
import TagProblemMappingDB from './tagProblemMappingDB'
import ShopUserMappingDB from './shopUserMappingDB'
import ProblemUserMappingDB from './problemUserMappingDB'
import TagsDB from './tagsDB'
import ShopDB from './shopDB'
import UserDB from './userDB'
import AdminDB from './adminDB'
const db = {
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_problem',
    port: 3306
}
// export const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'admin123',
//     database: 'my_blog',
//     port: 3306
// })

export const sqlQuery = (sql, values) => {
    // 返回一个 Promise
    return new Promise((resolve, reject) => {


        try {
            var connection = mysql.createConnection(db);

            // 二、连接数据库
            connection.connect(function (err) {
                if (err) {
                    console.error('连接失败' + err);
                    return;
                }
            });

            connection.query(sql, values, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)

                }
            });
            // connection.end()

        } catch (error) {
            console.log(error)
        }

    })

}


export {
    ProblemDB,
    MessageDB,
    TagProblemMappingDB,
    TagsDB,
    ShopDB,
    UserDB,
    AdminDB,
    ProblemUserMappingDB,
    ShopUserMappingDB,

}


