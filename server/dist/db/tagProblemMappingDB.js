"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertTagProblemMapping = insertTagProblemMapping;
exports.searchByTagCount = searchByTagCount;
exports.searchByTag = searchByTag;
exports.deleteMapping = deleteMapping;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("./db");

// 添加博客和标签映射
function insertTagProblemMapping(_x) {
  return _insertTagProblemMapping.apply(this, arguments);
} // 按标签查询 该标签下的problem数目


function _insertTagProblemMapping() {
  _insertTagProblemMapping = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(obj) {
    var tag_id, problem_id, ctime, utime, sql, params, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tag_id = obj.tag_id, problem_id = obj.problem_id, ctime = obj.ctime, utime = obj.utime;
            sql = 'insert into tag_problem_mapping(`tag_id`,`problem_id`,`ctime`,`utime`) values (?,?,?,?)';
            params = [tag_id, problem_id, ctime, utime];
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
  return _insertTagProblemMapping.apply(this, arguments);
}

function searchByTagCount(_x2) {
  return _searchByTagCount.apply(this, arguments);
} // 按标签查询 该标签下的problem


function _searchByTagCount() {
  _searchByTagCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(tabId) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sql = 'select count(1) as count from  tag_problem_mapping where tab_id=? ';
            params = [tabId];
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
  return _searchByTagCount.apply(this, arguments);
}

function searchByTag(_x3, _x4) {
  return _searchByTag.apply(this, arguments);
} //  删除标签


function _searchByTag() {
  _searchByTag = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(tabId, obj) {
    var page, limit, sql, params, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            page = obj.page, limit = obj.limit;
            sql = 'select * from  tag_problem_mapping where tab_id=? limit ?,?';
            params = [tabId, (page - 1) * limit, limit];
            _context3.prev = 3;
            _context3.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context3.sent;

            if (result.message) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", result);

          case 9:
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](3);
            console.log(_context3.t0);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 11]]);
  }));
  return _searchByTag.apply(this, arguments);
}

function deleteMapping(_x5) {
  return _deleteMapping.apply(this, arguments);
}

function _deleteMapping() {
  _deleteMapping = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(problem_id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            sql = 'delete from tag_problem_mapping where problem_id=?';
            params = [problem_id];
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
  return _deleteMapping.apply(this, arguments);
}

var _default = {
  insertTagProblemMapping: insertTagProblemMapping,
  searchByTagCount: searchByTagCount,
  searchByTag: searchByTag
};
exports["default"] = _default;