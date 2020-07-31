"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ProblemDB", {
  enumerable: true,
  get: function get() {
    return _problemDB["default"];
  }
});
Object.defineProperty(exports, "MessageDB", {
  enumerable: true,
  get: function get() {
    return _messageDB["default"];
  }
});
Object.defineProperty(exports, "TagProblemMappingDB", {
  enumerable: true,
  get: function get() {
    return _tagProblemMappingDB["default"];
  }
});
Object.defineProperty(exports, "ShopUserMappingDB", {
  enumerable: true,
  get: function get() {
    return _shopUserMappingDB["default"];
  }
});
Object.defineProperty(exports, "ProblemUserMappingDB", {
  enumerable: true,
  get: function get() {
    return _problemUserMappingDB["default"];
  }
});
Object.defineProperty(exports, "TagsDB", {
  enumerable: true,
  get: function get() {
    return _tagsDB["default"];
  }
});
Object.defineProperty(exports, "ShopDB", {
  enumerable: true,
  get: function get() {
    return _shopDB["default"];
  }
});
Object.defineProperty(exports, "UserDB", {
  enumerable: true,
  get: function get() {
    return _userDB["default"];
  }
});
Object.defineProperty(exports, "AdminDB", {
  enumerable: true,
  get: function get() {
    return _adminDB["default"];
  }
});
exports.sqlQuery = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

var _problemDB = _interopRequireDefault(require("./problemDB"));

var _messageDB = _interopRequireDefault(require("./messageDB"));

var _tagProblemMappingDB = _interopRequireDefault(require("./tagProblemMappingDB"));

var _shopUserMappingDB = _interopRequireDefault(require("./shopUserMappingDB"));

var _problemUserMappingDB = _interopRequireDefault(require("./problemUserMappingDB"));

var _tagsDB = _interopRequireDefault(require("./tagsDB"));

var _shopDB = _interopRequireDefault(require("./shopDB"));

var _userDB = _interopRequireDefault(require("./userDB"));

var _adminDB = _interopRequireDefault(require("./adminDB"));

var db = {
  host: '127.0.0.1',
  user: 'root',
  password: 'admin123',
  database: 'my_problem',
  port: 3306
}; // export const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'admin123',
//     database: 'my_blog',
//     port: 3306
// })

var sqlQuery = function sqlQuery(sql, values) {
  // 返回一个 Promise
  return new Promise(function (resolve, reject) {
    try {
      var connection = _mysql["default"].createConnection(db); // 二、连接数据库


      connection.connect(function (err) {
        if (err) {
          console.error('连接失败' + err);
          return;
        }
      });
      connection.query(sql, values, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }); // connection.end()
    } catch (error) {
      console.log(error);
    }
  });
};

exports.sqlQuery = sqlQuery;