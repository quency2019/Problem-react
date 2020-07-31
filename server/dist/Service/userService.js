"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.search");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _resultHelper = require("../utils/resultHelper");

var _db = require("../db/db");

var _getTime = require("../utils/getTime");

var UserService = /*#__PURE__*/function () {
  function UserService() {
    (0, _classCallCheck2["default"])(this, UserService);
  }

  (0, _createClass2["default"])(UserService, null, [{
    key: "findById",
    value: function () {
      var _findById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
        var res, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = Number(id);
                _context.next = 3;
                return _db.UserDB.findUserById(id);

              case 3:
                res = _context.sent;
                result = (0, _resultHelper.writeResult)("success", "查询成功", res);
                return _context.abrupt("return", result);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findById(_x) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }() // static async FindByCondition(obj) {
    //     id = Number(id)
    //     const res = await UserDB.findUserById(id)
    //     const result = writeResult("success", "查询成功", res)
    //     return result
    // }

  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        var result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = Number(id);
                _context2.next = 3;
                return _db.UserDB.deleteUserById(id);

              case 3:
                result = (0, _resultHelper.writeResult)("success", "删除成功", "");
                return _context2.abrupt("return", result);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function _delete(_x2) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "find",
    value: function () {
      var _find = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(user) {
        var user_name, user_password, res, result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                user_name = user.user_name, user_password = user.user_password;
                console.log(user_name, user_password, "user_name, user_pwd ");
                _context3.next = 4;
                return _db.UserDB.findUserName(user_name);

              case 4:
                res = _context3.sent;

                if (!(res.length === 0)) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", result = (0, _resultHelper.writeResult)("error", "帐号不存在", ''));

              case 7:
                if (res[0].user_password === user_password) {
                  console.log(res[0], "find");
                  result = (0, _resultHelper.writeResult)("success", "信息正确", "");
                } else {
                  result = (0, _resultHelper.writeResult)("error", "密码错误", '');
                }

                return _context3.abrupt("return", result);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function find(_x3) {
        return _find.apply(this, arguments);
      }

      return find;
    }()
  }, {
    key: "findByName",
    value: function () {
      var _findByName = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(user) {
        var user_name, res, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log(user, "user");
                user_name = user.user_name;
                _context4.next = 4;
                return _db.UserDB.findUserName(user_name);

              case 4:
                res = _context4.sent;
                console.log(res, "findByName");

                if (res.length === 0) {
                  result = (0, _resultHelper.writeResult)("success", "帐号不存在", '');
                } else {
                  result = (0, _resultHelper.writeResult)("success", "信息正确", res[0]);
                }

                return _context4.abrupt("return", result);

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function findByName(_x4) {
        return _findByName.apply(this, arguments);
      }

      return findByName;
    }()
  }, {
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(user) {
        var res, reg, result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _db.UserDB.findUserName(user.user_name);

              case 3:
                res = _context5.sent;

                if (!(res.length > 0)) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", (0, _resultHelper.writeResult)("error", "用户名已经存在", ''));

              case 6:
                reg = /^\w{6,18}$/;

                if (reg.test(user.user_name)) {
                  _context5.next = 9;
                  break;
                }

                return _context5.abrupt("return", (0, _resultHelper.writeResult)("error", "用户用户名必须是6-18位的字母数字及下划线", ''));

              case 9:
                if (reg.test(user.user_password)) {
                  _context5.next = 11;
                  break;
                }

                return _context5.abrupt("return", (0, _resultHelper.writeResult)("error", "用户密码必须是6-18位的字母数字及下划线", ''));

              case 11:
                user.ctime = (0, _getTime.getNowTime)();
                user.utime = (0, _getTime.getNowTime)();
                _context5.next = 15;
                return _db.UserDB.insertUser(user);

              case 15:
                result = _context5.sent;
                return _context5.abrupt("return", (0, _resultHelper.writeResult)("success", "添加成功", result));

              case 19:
                _context5.prev = 19;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0);

              case 22:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 19]]);
      }));

      function add(_x5) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "editPwd",
    value: function () {
      var _editPwd = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id, user) {
        var reg, key;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                reg = /^\w{6,18}$/;
                _context6.t0 = _regenerator["default"].keys(user);

              case 2:
                if ((_context6.t1 = _context6.t0()).done) {
                  _context6.next = 8;
                  break;
                }

                key = _context6.t1.value;

                if (reg.test(user[key])) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt("return", (0, _resultHelper.writeResult)("error", "用户密码必须是6-18位的字母数字及下划线", ''));

              case 6:
                _context6.next = 2;
                break;

              case 8:
                user.id = Number(id);
                user.utime = (0, _getTime.getNowTime)();
                _context6.next = 12;
                return _db.UserDB.updateUserPwd(user);

              case 12:
                return _context6.abrupt("return", (0, _resultHelper.writeResult)("success", "修改成功", ''));

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function editPwd(_x6, _x7) {
        return _editPwd.apply(this, arguments);
      }

      return editPwd;
    }() //修改用户头像

  }, {
    key: "editPhoto",
    value: function () {
      var _editPhoto = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(id, user) {
        var result;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                user.id = Number(id);
                user.utime = (0, _getTime.getNowTime)();
                _context7.next = 4;
                return _db.UserDB.updateUserPhoto(user);

              case 4:
                result = _context7.sent;
                return _context7.abrupt("return", (0, _resultHelper.writeResult)("success", "修改成功", ""));

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function editPhoto(_x8, _x9) {
        return _editPhoto.apply(this, arguments);
      }

      return editPhoto;
    }() //修改用户购物车

  }, {
    key: "editShopping",
    value: function () {
      var _editShopping = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(id, obj) {
        var res, result;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                obj.id = Number(id);
                obj.utime = (0, _getTime.getNowTime)();
                _context8.next = 4;
                return _db.UserDB.updateUserShopping(obj);

              case 4:
                res = _context8.sent;
                result = (0, _resultHelper.writeResult)("success", "修改成功", res);
                return _context8.abrupt("return", result);

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function editShopping(_x10, _x11) {
        return _editShopping.apply(this, arguments);
      }

      return editShopping;
    }() //编辑用户题库

  }, {
    key: "editShopTags",
    value: function () {
      var _editShopTags = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(id, obj) {
        var res, result;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                console.log(obj, "editShopTags");
                obj.id = Number(id);
                obj.utime = (0, _getTime.getNowTime)();
                _context9.next = 5;
                return _db.UserDB.updateUserTags(obj);

              case 5:
                res = _context9.sent;
                result = (0, _resultHelper.writeResult)("success", "修改成功", res);
                return _context9.abrupt("return", result);

              case 8:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function editShopTags(_x12, _x13) {
        return _editShopTags.apply(this, arguments);
      }

      return editShopTags;
    }() //按页查询user

  }, {
    key: "FindByCondition",
    value: function () {
      var _FindByCondition = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(obj) {
        var result, count, res, count1, _res, _count, resultEnd;

        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                //字符串转换成数字
                console.log(obj, "FindBySearch");
                obj.page = Number(obj.page);
                obj.limit = Number(obj.limit);

                if (!(obj.search === "")) {
                  _context10.next = 15;
                  break;
                }

                console.log(obj, 'searchUserByPage');
                _context10.next = 7;
                return _db.UserDB.searchUserByPage(obj);

              case 7:
                res = _context10.sent;
                _context10.next = 10;
                return UserService.getCount();

              case 10:
                count1 = _context10.sent;
                result = res;
                count = count1.data[0].count;
                _context10.next = 27;
                break;

              case 15:
                _context10.next = 17;
                return _db.UserDB.searchUserBySearch(obj);

              case 17:
                _res = _context10.sent;

                if (!(_res.length === 0)) {
                  _context10.next = 22;
                  break;
                }

                _count = 0;
                _context10.next = 26;
                break;

              case 22:
                _context10.next = 24;
                return _db.UserDB.searchUserBySearchCount(obj);

              case 24:
                _count = _context10.sent;
                count = _count.data[0].count;

              case 26:
                result = _res;

              case 27:
                resultEnd = (0, _resultHelper.writeResult)("success", "查询成功", {
                  result: result,
                  count: count
                });
                return _context10.abrupt("return", resultEnd);

              case 29:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function FindByCondition(_x14) {
        return _FindByCondition.apply(this, arguments);
      }

      return FindByCondition;
    }() // 获得user 总数

  }, {
    key: "getCount",
    value: function () {
      var _getCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
        var res, result;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return _db.UserDB.searchUserCount();

              case 2:
                res = _context11.sent;
                result = (0, _resultHelper.writeResult)("success", "查询成功", res);
                return _context11.abrupt("return", result);

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function getCount() {
        return _getCount.apply(this, arguments);
      }

      return getCount;
    }()
  }]);
  return UserService;
}();

exports.UserService = UserService;