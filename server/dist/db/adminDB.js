"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertAdmin = insertAdmin;
exports.updataAdminById = updataAdminById;
exports.findAdminName = findAdminName;
exports.findAdminById = findAdminById;
exports.searchAdminByPage = searchAdminByPage;
exports.searchAdminCount = searchAdminCount;
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("./db");

//添加管理员
function insertAdmin(_x) {
  return _insertAdmin.apply(this, arguments);
} //修改管理员密码


function _insertAdmin() {
  _insertAdmin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(admin) {
    var admin_name, admin_pwd, ctime, utime, sql, params, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(admin);
            admin_name = admin.admin_name, admin_pwd = admin.admin_pwd, ctime = admin.ctime, utime = admin.utime;
            sql = 'insert into admin(`admin_name`,`admin_pwd`,`ctime`,`utime`) values(?,?,?,?)';
            params = [admin_name, admin_pwd, ctime, utime];
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
  return _insertAdmin.apply(this, arguments);
}

function updataAdminById(_x2) {
  return _updataAdminById.apply(this, arguments);
} //查询管理员 admin_name 唯一


function _updataAdminById() {
  _updataAdminById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(admin) {
    var id, admin_pwd, utime, sql, params, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = admin.id, admin_pwd = admin.admin_pwd, utime = admin.utime;
            console.log((0, _typeof2["default"])(id), (0, _typeof2["default"])(admin_pwd), (0, _typeof2["default"])(utime));
            sql = 'update admin set admin_pwd=?,utime=? where id=?';
            params = [admin_pwd, utime, id];
            _context2.prev = 4;
            _context2.next = 7;
            return (0, _db.sqlQuery)(sql, params);

          case 7:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](4);
            console.log(_context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 11]]);
  }));
  return _updataAdminById.apply(this, arguments);
}

function findAdminName(_x3) {
  return _findAdminName.apply(this, arguments);
}

function _findAdminName() {
  _findAdminName = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(admin_name) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            sql = 'select * from admin where admin_name = ?';
            params = [admin_name];
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
  return _findAdminName.apply(this, arguments);
}

function findAdminById(_x4) {
  return _findAdminById.apply(this, arguments);
} //按照查询条件查询管理员


function _findAdminById() {
  _findAdminById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            sql = 'select * from admin where id = ?';
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
  return _findAdminById.apply(this, arguments);
}

function searchAdminByPage(_x5) {
  return _searchAdminByPage.apply(this, arguments);
} // 获得admin 总数


function _searchAdminByPage() {
  _searchAdminByPage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(obj) {
    var page, limit, sql, params, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            page = obj.page, limit = obj.limit;
            sql = 'select * from admin order by id desc limit ?,?';
            params = [(page - 1) * limit, limit];
            _context5.prev = 3;
            _context5.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context5.sent;
            return _context5.abrupt("return", result);

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](3);
            console.log(_context5.t0);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 10]]);
  }));
  return _searchAdminByPage.apply(this, arguments);
}

function searchAdminCount() {
  return _searchAdminCount.apply(this, arguments);
}

function _searchAdminCount() {
  _searchAdminCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
    var sql, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            sql = 'select count(1) as count from admin';
            _context6.prev = 1;
            _context6.next = 4;
            return (0, _db.sqlQuery)(sql);

          case 4:
            result = _context6.sent;
            return _context6.abrupt("return", result);

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return _searchAdminCount.apply(this, arguments);
}

var _default = {
  insertAdmin: insertAdmin,
  findAdminName: findAdminName,
  findAdminById: findAdminById,
  updataAdminById: updataAdminById,
  searchAdminByPage: searchAdminByPage
};
exports["default"] = _default;