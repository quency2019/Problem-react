"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertMessage = insertMessage;
exports.updateMessage = updateMessage;
exports.searchMessage = searchMessage;
exports.searchMessageById = searchMessageById;
exports.searchMessageByProblemId = searchMessageByProblemId;
exports.searchMessageCountByProblemId = searchMessageCountByProblemId;
exports.searchMessageByProblemIdAndPage = searchMessageByProblemIdAndPage;
exports.getMessageCount = getMessageCount;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("./db");

// 添加评论信息
function insertMessage(_x) {
  return _insertMessage.apply(this, arguments);
} // update评论信息


function _insertMessage() {
  _insertMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(obj) {
    var problem_id, user_id, user_name, message, ctime, utime, sql, params, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            problem_id = obj.problem_id, user_id = obj.user_id, user_name = obj.user_name, message = obj.message, ctime = obj.ctime, utime = obj.utime;
            console.log(obj);
            sql = 'insert into message(`problem_id`,`user_id`,`user_name`,`message`,`ctime`,`utime`) values (?,?,?,?,?,?)';
            params = [problem_id, user_id, user_name, message, ctime, utime];
            _context.prev = 4;
            _context.next = 7;
            return (0, _db.sqlQuery)(sql, params);

          case 7:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            console.log(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 11]]);
  }));
  return _insertMessage.apply(this, arguments);
}

function updateMessage(_x2) {
  return _updateMessage.apply(this, arguments);
} //倒序得到 size条评论信息


function _updateMessage() {
  _updateMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(obj) {
    var id, message, utime, sql, params, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = obj.id, message = obj.message, utime = obj.utime;
            sql = 'update message set message=?, utime=? where id=?';
            params = [message, utime, id];
            _context2.prev = 3;
            _context2.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](3);
            console.log(_context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 10]]);
  }));
  return _updateMessage.apply(this, arguments);
}

function searchMessage(_x3) {
  return _searchMessage.apply(this, arguments);
} //通过 id  获取到评论信息


function _searchMessage() {
  _searchMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(size) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            sql = 'select * from message order by ctime desc limit ?';
            params = [size];
            _context3.prev = 2;
            _context3.next = 5;
            return (0, _db.sqlQuery)(sql, params);

          case 5:
            result = _context3.sent;
            return _context3.abrupt("return", result);

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 9]]);
  }));
  return _searchMessage.apply(this, arguments);
}

function searchMessageById(_x4) {
  return _searchMessageById.apply(this, arguments);
} //通过problem id  获取到评论信息


function _searchMessageById() {
  _searchMessageById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            sql = 'select * from message where id = ?';
            params = [id];
            _context4.prev = 2;
            _context4.next = 5;
            return (0, _db.sqlQuery)(sql, params);

          case 5:
            result = _context4.sent;
            return _context4.abrupt("return", result);

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 9]]);
  }));
  return _searchMessageById.apply(this, arguments);
}

function searchMessageByProblemId(_x5) {
  return _searchMessageByProblemId.apply(this, arguments);
} //通过problem id  获取到评论总数


function _searchMessageByProblemId() {
  _searchMessageByProblemId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(problemId) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            sql = 'select * from message where problem_id = ?';
            params = [problemId];
            _context5.prev = 2;
            _context5.next = 5;
            return (0, _db.sqlQuery)(sql, params);

          case 5:
            result = _context5.sent;
            return _context5.abrupt("return", result);

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 9]]);
  }));
  return _searchMessageByProblemId.apply(this, arguments);
}

function searchMessageCountByProblemId(_x6) {
  return _searchMessageCountByProblemId.apply(this, arguments);
} //通过problem id  获取到评论searchProblemByPage


function _searchMessageCountByProblemId() {
  _searchMessageCountByProblemId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(problem_id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            sql = 'select count(1) as count from message where problem_id = ?';
            params = [problem_id];
            _context6.prev = 2;
            _context6.next = 5;
            return (0, _db.sqlQuery)(sql, params);

          case 5:
            result = _context6.sent;
            return _context6.abrupt("return", result[0].count);

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 9]]);
  }));
  return _searchMessageCountByProblemId.apply(this, arguments);
}

function searchMessageByProblemIdAndPage(_x7) {
  return _searchMessageByProblemIdAndPage.apply(this, arguments);
} // 得到所有的评论总数


function _searchMessageByProblemIdAndPage() {
  _searchMessageByProblemIdAndPage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(obj) {
    var page, limit, problem_id, sql, params, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            page = obj.page, limit = obj.limit, problem_id = obj.problem_id;
            sql = 'select * from message where problem_id=? order by ctime desc limit ?,?';
            params = [problem_id, (page - 1) * limit, limit];
            _context7.prev = 3;
            _context7.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context7.sent;
            return _context7.abrupt("return", result);

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](3);
            console.log(_context7.t0);

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[3, 10]]);
  }));
  return _searchMessageByProblemIdAndPage.apply(this, arguments);
}

function getMessageCount() {
  return _getMessageCount.apply(this, arguments);
} // export async function searchNewMessage(size) {
//     var sql = "select * from message order by id desc limit ?;";
//     var params = [size];
//     try {
//         const result = await sqlQuery(sql, params)
//         return result
//     } catch (error) {
//         console.log(error)
//     }
// }


function _getMessageCount() {
  _getMessageCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
    var sql, result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            sql = 'select count(1) as count from message';
            _context8.prev = 1;
            _context8.next = 4;
            return (0, _db.sqlQuery)(sql);

          case 4:
            result = _context8.sent;
            return _context8.abrupt("return", result);

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 8]]);
  }));
  return _getMessageCount.apply(this, arguments);
}

var _default = {
  insertMessage: insertMessage,
  searchMessage: searchMessage,
  searchMessageByProblemId: searchMessageByProblemId,
  searchMessageCountByProblemId: searchMessageCountByProblemId,
  searchMessageByProblemIdAndPage: searchMessageByProblemIdAndPage,
  searchMessageById: searchMessageById
};
exports["default"] = _default;