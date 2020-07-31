"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertTags = insertTags;
exports.findTags = findTags;
exports.findAllTags = findAllTags;
exports.deleteTags = deleteTags;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("./db");

// 添加标签
function insertTags(_x) {
  return _insertTags.apply(this, arguments);
} // 搜索标签


function _insertTags() {
  _insertTags = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(obj) {
    var tag, ctime, utime, sql, params, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tag = obj.tag, ctime = obj.ctime, utime = obj.utime;
            sql = 'insert into tags(`tag`,`ctime`,`utime`) values (?,?,?)';
            params = [tag, ctime, utime];
            _context.prev = 3;
            _context.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 10]]);
  }));
  return _insertTags.apply(this, arguments);
}

function findTags(_x2) {
  return _findTags.apply(this, arguments);
} // 得到全部标签


function _findTags() {
  _findTags = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(tagName) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sql = 'select * from tags where tag=?';
            params = [tagName];
            _context2.prev = 2;
            _context2.next = 5;
            return (0, _db.sqlQuery)(sql, params);

          case 5:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 9]]);
  }));
  return _findTags.apply(this, arguments);
}

function findAllTags() {
  return _findAllTags.apply(this, arguments);
} //  删除标签


function _findAllTags() {
  _findAllTags = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var sql, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            sql = 'select * from tags';
            _context3.prev = 1;
            _context3.next = 4;
            return (0, _db.sqlQuery)(sql);

          case 4:
            result = _context3.sent;
            return _context3.abrupt("return", result);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _findAllTags.apply(this, arguments);
}

function deleteTags(_x3) {
  return _deleteTags.apply(this, arguments);
}

function _deleteTags() {
  _deleteTags = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(problem_id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            sql = 'delete from tags where problem_id=?';
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
  return _deleteTags.apply(this, arguments);
}

var _default = {
  findTags: findTags,
  insertTags: insertTags,
  deleteTags: deleteTags,
  findAllTags: findAllTags
};
exports["default"] = _default;