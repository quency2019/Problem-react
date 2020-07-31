"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertShopUserMapping = insertShopUserMapping;
exports.searchByUser = searchByUser;
exports.searchByShop = searchByShop;
exports.deleteShopUserMapping = deleteShopUserMapping;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("./db");

// 添加shop和user映射
function insertShopUserMapping(_x) {
  return _insertShopUserMapping.apply(this, arguments);
} // 按user id查询 


function _insertShopUserMapping() {
  _insertShopUserMapping = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(obj) {
    var user_id, shop_id, ctime, utime, sql, params, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user_id = obj.user_id, shop_id = obj.shop_id, ctime = obj.ctime, utime = obj.utime;
            sql = 'insert into shop_user_mapping(`user_id`,`shop_id`,`ctime`,`utime`) values (?,?,?,?)';
            params = [user_id, shop_id, ctime, utime];
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
  return _insertShopUserMapping.apply(this, arguments);
}

function searchByUser(_x2) {
  return _searchByUser.apply(this, arguments);
} // 按shop id查询 


function _searchByUser() {
  _searchByUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(user_id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sql = 'select * from shop_user_mapping where user_id=? ';
            params = [user_id];
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
  return _searchByUser.apply(this, arguments);
}

function searchByShop(_x3) {
  return _searchByShop.apply(this, arguments);
} // 按id删除shopUserMapping


function _searchByShop() {
  _searchByShop = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(shop_id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            sql = 'select * from shop_user_mapping where shop_id=? ';
            params = [shop_id];
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
  return _searchByShop.apply(this, arguments);
}

function deleteShopUserMapping(_x4) {
  return _deleteShopUserMapping.apply(this, arguments);
}

function _deleteShopUserMapping() {
  _deleteShopUserMapping = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log(id);
            sql = "delete from shopUserMapping where id = ?;";
            params = [id];
            _context4.prev = 3;
            _context4.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context4.sent;
            console.log(result);
            return _context4.abrupt("return", result);

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](3);
            console.log(_context4.t0);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 11]]);
  }));
  return _deleteShopUserMapping.apply(this, arguments);
}

var _default = {
  insertShopUserMapping: insertShopUserMapping,
  searchByShop: searchByShop,
  searchByUser: searchByUser,
  deleteShopUserMapping: deleteShopUserMapping
};
exports["default"] = _default;