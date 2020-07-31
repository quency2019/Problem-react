"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertProblemUserMapping = insertProblemUserMapping;
exports.searchByProblem = searchByProblem;
exports.searchByUser = searchByUser;
exports.updateProblemUserMapping = updateProblemUserMapping;
exports.deleteProblemUserMapping = deleteProblemUserMapping;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("./db");

// 添加problem和user映射
function insertProblemUserMapping(_x) {
  return _insertProblemUserMapping.apply(this, arguments);
} // 按Problem id查询 


function _insertProblemUserMapping() {
  _insertProblemUserMapping = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(obj) {
    var user_id, problem_id, love, good, ctime, utime, sql, params, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user_id = obj.user_id, problem_id = obj.problem_id, love = obj.love, good = obj.good, ctime = obj.ctime, utime = obj.utime;
            sql = 'insert into problem_user_mapping(`user_id`,`problem_id`,`love`,`good`,`ctime`,`utime`) values (?,?,?,?,?,?)';
            params = [user_id, problem_id, love, good, ctime, utime];
            _context.prev = 3;
            _context.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context.sent;

            if (result.message) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", result);

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 11]]);
  }));
  return _insertProblemUserMapping.apply(this, arguments);
}

function searchByProblem(_x2) {
  return _searchByProblem.apply(this, arguments);
} // 按user id查询 


function _searchByProblem() {
  _searchByProblem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(problem_id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sql = 'select * from problem_user_mapping where problem_id=? ';
            params = [problem_id];
            _context2.prev = 2;
            _context2.next = 5;
            return (0, _db.sqlQuery)(sql, params);

          case 5:
            result = _context2.sent;

            if (result.message) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", result);

          case 8:
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 10]]);
  }));
  return _searchByProblem.apply(this, arguments);
}

function searchByUser(_x3) {
  return _searchByUser.apply(this, arguments);
} //编辑 内容


function _searchByUser() {
  _searchByUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(user_id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            sql = 'select * from problem_user_mapping where user_id=? ';
            params = [user_id];
            _context3.prev = 2;
            _context3.next = 5;
            return (0, _db.sqlQuery)(sql, params);

          case 5:
            result = _context3.sent;

            if (result.message) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", result);

          case 8:
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 10]]);
  }));
  return _searchByUser.apply(this, arguments);
}

function updateProblemUserMapping(_x4) {
  return _updateProblemUserMapping.apply(this, arguments);
} // 按id删除ProblemUserMapping


function _updateProblemUserMapping() {
  _updateProblemUserMapping = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(info) {
    var id, user_id, problem_id, love, good, utime, sql, params, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = info.id, user_id = info.user_id, problem_id = info.problem_id, love = info.love, good = info.good, utime = info.utime;
            console.log(id, user_id, problem_id, love, good, "updateProblemUserMapping");
            sql = 'update problem_user_mapping set user_id=?, problem_id=?, love=?, good=?, utime=? where id=?';
            params = [user_id, problem_id, love, good, utime, id];
            _context4.prev = 4;
            _context4.next = 7;
            return (0, _db.sqlQuery)(sql, params);

          case 7:
            result = _context4.sent;
            return _context4.abrupt("return", result);

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](4);
            console.log(_context4.t0);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[4, 11]]);
  }));
  return _updateProblemUserMapping.apply(this, arguments);
}

function deleteProblemUserMapping(_x5) {
  return _deleteProblemUserMapping.apply(this, arguments);
}

function _deleteProblemUserMapping() {
  _deleteProblemUserMapping = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            console.log(id);
            sql = "delete from problem_user_mapping where id = ?;";
            params = [id];
            _context5.prev = 3;
            _context5.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context5.sent;
            console.log(result);
            return _context5.abrupt("return", result);

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](3);
            console.log(_context5.t0);

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 11]]);
  }));
  return _deleteProblemUserMapping.apply(this, arguments);
}

var _default = {
  updateProblemUserMapping: updateProblemUserMapping,
  searchByUser: searchByUser,
  searchByProblem: searchByProblem,
  insertProblemUserMapping: insertProblemUserMapping,
  deleteProblemUserMapping: deleteProblemUserMapping
};
exports["default"] = _default;