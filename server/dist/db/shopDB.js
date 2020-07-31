"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertShop = insertShop;
exports.findShop = findShop;
exports.findShopByUserId = findShopByUserId;
exports.updateShopContent = updateShopContent;
exports.updateShopName = updateShopName;
exports.deleteShop = deleteShop;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("./db");

var _getTime = require("../utils/getTime");

//添加题库
function insertShop(_x) {
  return _insertShop.apply(this, arguments);
} //id查询用户题库 


function _insertShop() {
  _insertShop = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(shop) {
    var user_id, shop_tag_name, shop_content, ctime, utime, sql, params, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user_id = shop.user_id, shop_tag_name = shop.shop_tag_name, shop_content = shop.shop_content, ctime = shop.ctime, utime = shop.utime;
            sql = 'insert into shop(`user_id`,`shop_tag_name`,`shop_content`,`ctime`,`utime`) values(?,?,?,?,?)';
            params = [user_id, shop_tag_name, shop_content, ctime, utime];
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
  return _insertShop.apply(this, arguments);
}

function findShop(_x2) {
  return _findShop.apply(this, arguments);
} //user_id查询用户题库 


function _findShop() {
  _findShop = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(id);
            sql = 'select * from shop where id = ?';
            params = [id];
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
  return _findShop.apply(this, arguments);
}

function findShopByUserId(_x3) {
  return _findShopByUserId.apply(this, arguments);
} //编辑用户题库 内容


function _findShopByUserId() {
  _findShopByUserId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            sql = 'select * from shop where user_id = ?';
            params = [id];
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
  return _findShopByUserId.apply(this, arguments);
}

function updateShopContent(_x4) {
  return _updateShopContent.apply(this, arguments);
} //编辑用户题库 名称


function _updateShopContent() {
  _updateShopContent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(shopInfo) {
    var id, content, utime, sql, params, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = shopInfo.id, content = shopInfo.content, utime = shopInfo.utime;
            sql = 'update shop set content=?,utime=? where id=?';
            params = [content, utime, id];
            _context4.prev = 3;
            _context4.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context4.sent;
            return _context4.abrupt("return", result);

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](3);
            console.log(_context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 10]]);
  }));
  return _updateShopContent.apply(this, arguments);
}

function updateShopName(_x5) {
  return _updateShopName.apply(this, arguments);
} //删除题库


function _updateShopName() {
  _updateShopName = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(shopInfo) {
    var id, user_id, shop_tag_name, utime, sql, params, result, res, tags_name, i, userInfo;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = shopInfo.id, user_id = shopInfo.user_id, shop_tag_name = shopInfo.shop_tag_name, utime = shopInfo.utime;
            sql = 'update shop set shop_tag_name=?,utime=? where id=?';
            params = [shop_tag_name, utime, id];
            _context5.prev = 3;
            _context5.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context5.sent;
            _context5.next = 9;
            return findShop(user_id);

          case 9:
            res = _context5.sent;
            tags_name = '';

            for (i = 0; i < res.length; i++) {
              tags_name += res[i].shop_tag_name;
            }

            userInfo = {
              id: user_id,
              shop_tags_name: tags_name,
              utime: (0, _getTime.getNowTime)()
            };
            _context5.next = 15;
            return _db.UserDB.updateUserTags(userInfo);

          case 15:
            return _context5.abrupt("return");

          case 18:
            _context5.prev = 18;
            _context5.t0 = _context5["catch"](3);
            console.log(_context5.t0);

          case 21:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 18]]);
  }));
  return _updateShopName.apply(this, arguments);
}

function deleteShop(_x6) {
  return _deleteShop.apply(this, arguments);
}

function _deleteShop() {
  _deleteShop = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(shopInfo) {
    var id, user_id, sql, params, result, res, tags_name, i, userInfo;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = shopInfo.id, user_id = shopInfo.user_id;
            sql = 'delete from shop where id=?';
            params = [id];
            _context6.prev = 3;
            _context6.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context6.sent;
            res = findShop(user_id);
            tags_name = '';

            for (i = 0; i < res.length; i++) {
              tags_name += res[i].shop_tag_name;
            }

            userInfo = {
              id: user_id,
              shop_tags_name: tags_name,
              utime: (0, _getTime.getNowTime)()
            };
            _context6.next = 13;
            return _db.UserDB.updataUserTags(userInfo);

          case 13:
            return _context6.abrupt("return");

          case 16:
            _context6.prev = 16;
            _context6.t0 = _context6["catch"](3);
            console.log(_context6.t0);

          case 19:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[3, 16]]);
  }));
  return _deleteShop.apply(this, arguments);
}

var _default = {
  insertShop: insertShop,
  findShop: findShop,
  findShopByUserId: findShopByUserId,
  updateShopName: updateShopName,
  deleteShop: deleteShop
};
exports["default"] = _default;