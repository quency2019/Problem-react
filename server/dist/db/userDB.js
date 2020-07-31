"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.search");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertUser = insertUser;
exports.findUserName = findUserName;
exports.findUserById = findUserById;
exports.searchUserByPage = searchUserByPage;
exports.searchUserCount = searchUserCount;
exports.deleteUserById = deleteUserById;
exports.updateUserPhoto = updateUserPhoto;
exports.updateUserTags = updateUserTags;
exports.updateUserPwd = updateUserPwd;
exports.updateUserShopping = updateUserShopping;
exports.updateUserShopTags = updateUserShopTags;
exports.searchUserBySearch = searchUserBySearch;
exports.searchUserBySearchCount = searchUserBySearchCount;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("./db");

//添加用户
function insertUser(_x) {
  return _insertUser.apply(this, arguments);
} //查询用户 user_name 唯一


function _insertUser() {
  _insertUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user) {
    var user_name, photo, user_password, shop_tags_name, shopping, ctime, utime, sql, params, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user_name = user.user_name, photo = user.photo, user_password = user.user_password, shop_tags_name = user.shop_tags_name, shopping = user.shopping, ctime = user.ctime, utime = user.utime;
            sql = 'insert into user(`user_name`,`photo`,`user_password`,`shop_tags_name`,`shopping`,`ctime`,`utime`) values(?,?,?,?,?,?,?)';
            params = [user_name, photo, user_password, shop_tags_name, shopping, ctime, utime];
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
  return _insertUser.apply(this, arguments);
}

function findUserName(_x2) {
  return _findUserName.apply(this, arguments);
} //查询用户id


function _findUserName() {
  _findUserName = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(user_name) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sql = 'select * from user where user_name = ?';
            params = [user_name];
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
  return _findUserName.apply(this, arguments);
}

function findUserById(_x3) {
  return _findUserById.apply(this, arguments);
} //按照查询条件查询用户


function _findUserById() {
  _findUserById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            sql = 'select * from user where id = ?';
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
  return _findUserById.apply(this, arguments);
}

function searchUserByPage(_x4) {
  return _searchUserByPage.apply(this, arguments);
} // 获得user 总数


function _searchUserByPage() {
  _searchUserByPage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(obj) {
    var page, limit, sql, params, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            page = obj.page, limit = obj.limit;
            sql = 'select * from user order by id desc limit ?,?';
            params = [(page - 1) * limit, limit];
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
  return _searchUserByPage.apply(this, arguments);
}

function searchUserCount() {
  return _searchUserCount.apply(this, arguments);
} //删除用户  id


function _searchUserCount() {
  _searchUserCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
    var sql, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            sql = 'select count(1) as count from user';
            _context5.prev = 1;
            _context5.next = 4;
            return (0, _db.sqlQuery)(sql);

          case 4:
            result = _context5.sent;
            return _context5.abrupt("return", result);

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return _searchUserCount.apply(this, arguments);
}

function deleteUserById(_x5) {
  return _deleteUserById.apply(this, arguments);
} //编辑用户头像


function _deleteUserById() {
  _deleteUserById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            sql = 'delete from user where id = ?';
            params = [id];
            _context6.prev = 2;
            _context6.next = 5;
            return (0, _db.sqlQuery)(sql, params);

          case 5:
            result = _context6.sent;
            return _context6.abrupt("return", result);

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
  return _deleteUserById.apply(this, arguments);
}

function updateUserPhoto(_x6) {
  return _updateUserPhoto.apply(this, arguments);
} //编辑用户标签 


function _updateUserPhoto() {
  _updateUserPhoto = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(userInfo) {
    var id, photo, utime, sql, params, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = userInfo.id, photo = userInfo.photo, utime = userInfo.utime;
            sql = 'update user set photo=?,utime=? where id=?';
            params = [photo, utime, id];
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
  return _updateUserPhoto.apply(this, arguments);
}

function updateUserTags(_x7) {
  return _updateUserTags.apply(this, arguments);
} //编辑用户密码


function _updateUserTags() {
  _updateUserTags = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(userInfo) {
    var id, shop_tags_name, utime, sql, params, result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = userInfo.id, shop_tags_name = userInfo.shop_tags_name, utime = userInfo.utime;
            sql = 'update user set shop_tags_name=?,utime=? where id=?';
            params = [shop_tags_name, utime, id];
            _context8.prev = 3;
            _context8.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context8.sent;
            return _context8.abrupt("return", result);

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](3);
            console.log(_context8.t0);

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[3, 10]]);
  }));
  return _updateUserTags.apply(this, arguments);
}

function updateUserPwd(_x8) {
  return _updateUserPwd.apply(this, arguments);
} //编辑用户购物车


function _updateUserPwd() {
  _updateUserPwd = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(userInfo) {
    var id, user_password, utime, sql, params, result;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id = userInfo.id, user_password = userInfo.user_password, utime = userInfo.utime;
            sql = 'update user set user_password=?,utime=? where id=?';
            params = [user_password, utime, id];
            _context9.prev = 3;
            _context9.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context9.sent;
            return _context9.abrupt("return", result);

          case 10:
            _context9.prev = 10;
            _context9.t0 = _context9["catch"](3);
            console.log(_context9.t0);

          case 13:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[3, 10]]);
  }));
  return _updateUserPwd.apply(this, arguments);
}

function updateUserShopping(_x9) {
  return _updateUserShopping.apply(this, arguments);
} //编辑用户题库名


function _updateUserShopping() {
  _updateUserShopping = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(userInfo) {
    var id, shopping, utime, sql, params, result;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id = userInfo.id, shopping = userInfo.shopping, utime = userInfo.utime;
            sql = 'update user set shopping=?,utime=? where id=?';
            params = [shopping, utime, id];
            _context10.prev = 3;
            _context10.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context10.sent;
            return _context10.abrupt("return", result);

          case 10:
            _context10.prev = 10;
            _context10.t0 = _context10["catch"](3);
            console.log(_context10.t0);

          case 13:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[3, 10]]);
  }));
  return _updateUserShopping.apply(this, arguments);
}

function updateUserShopTags(_x10) {
  return _updateUserShopTags.apply(this, arguments);
} // title content tags  模糊查询


function _updateUserShopTags() {
  _updateUserShopTags = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(userInfo) {
    var id, shopping, utime, sql, params, result;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            id = userInfo.id, shopping = userInfo.shopping, utime = userInfo.utime;
            sql = 'update user set shopping=?,utime=? where id=?';
            params = [shopping, utime, id];
            _context11.prev = 3;
            _context11.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context11.sent;
            return _context11.abrupt("return", result);

          case 10:
            _context11.prev = 10;
            _context11.t0 = _context11["catch"](3);
            console.log(_context11.t0);

          case 13:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[3, 10]]);
  }));
  return _updateUserShopTags.apply(this, arguments);
}

function searchUserBySearch(_x11) {
  return _searchUserBySearch.apply(this, arguments);
} // 得到模糊查询总数


function _searchUserBySearch() {
  _searchUserBySearch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(obj) {
    var page, limit, search, sql, params, result;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            console.log(obj, "searchUserBySearch");
            page = obj.page, limit = obj.limit, search = obj.search;
            sql = "select * from user where user_name like concat(concat('%', ?), '%') limit ?,?;";
            params = [search, (page - 1) * limit, limit];
            _context12.prev = 4;
            _context12.next = 7;
            return (0, _db.sqlQuery)(sql, params);

          case 7:
            result = _context12.sent;
            console.log(result);
            return _context12.abrupt("return", result);

          case 12:
            _context12.prev = 12;
            _context12.t0 = _context12["catch"](4);
            console.log(_context12.t0);

          case 15:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[4, 12]]);
  }));
  return _searchUserBySearch.apply(this, arguments);
}

function searchUserBySearchCount(_x12) {
  return _searchUserBySearchCount.apply(this, arguments);
}

function _searchUserBySearchCount() {
  _searchUserBySearchCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(search) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            sql = "select count(1) as count from user where user_name like \"%?%\";";
            params = [search];
            _context13.prev = 2;
            _context13.next = 5;
            return (0, _db.sqlQuery)(sql, params);

          case 5:
            result = _context13.sent;
            return _context13.abrupt("return", result);

          case 9:
            _context13.prev = 9;
            _context13.t0 = _context13["catch"](2);
            console.log(_context13.t0);

          case 12:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[2, 9]]);
  }));
  return _searchUserBySearchCount.apply(this, arguments);
}

var _default = {
  insertUser: insertUser,
  findUserName: findUserName,
  updateUserTags: updateUserTags,
  updateUserPwd: updateUserPwd,
  updateUserShopping: updateUserShopping,
  updateUserPhoto: updateUserPhoto,
  findUserById: findUserById,
  deleteUserById: deleteUserById,
  searchUserByPage: searchUserByPage,
  searchUserBySearch: searchUserBySearch,
  searchUserBySearchCount: searchUserBySearchCount,
  searchUserCount: searchUserCount
};
exports["default"] = _default;