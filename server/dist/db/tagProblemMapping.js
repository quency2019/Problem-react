"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertTagProblemMapping = insertTagProblemMapping;
exports.searchByTagCount = searchByTagCount;
exports["default"] = void 0;

require("regenerator-runtime/runtime");

var _db = require("./db");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 添加博客和标签映射
function insertTagProblemMapping(_x) {
  return _insertTagProblemMapping.apply(this, arguments);
} // 按标签查询 该标签下的problem数目


function _insertTagProblemMapping() {
  _insertTagProblemMapping = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(obj) {
    var tag_id, problem_id, ctime, utime, sql, params, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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
}

function _searchByTagCount() {
  _searchByTagCount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(tabId) {
    var sql, params, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
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

var _default = {
  insertTagProblemMapping: insertTagProblemMapping,
  searchByTagCount: searchByTagCount
};
exports["default"] = _default;