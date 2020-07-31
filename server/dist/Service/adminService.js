"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = require("../db/db");

var _resultHelper = require("../utils/resultHelper");

var _getTime = require("../utils/getTime");

var AdminService = /*#__PURE__*/function () {
  function AdminService() {
    (0, _classCallCheck2["default"])(this, AdminService);
  }

  (0, _createClass2["default"])(AdminService, null, [{
    key: "findAdminById",
    //根据id查找管理员
    value: function () {
      var _findAdminById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
        var res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = Number(id);
                _context.next = 3;
                return _db.AdminDB.findAdminById(id);

              case 3:
                res = _context.sent;
                return _context.abrupt("return", res);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findAdminById(_x) {
        return _findAdminById.apply(this, arguments);
      }

      return findAdminById;
    }() //根据id修改管理员

  }, {
    key: "editAdminById",
    value: function () {
      var _editAdminById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id, admin) {
        var reg, res;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                admin.id = Number(id);
                admin.utime = (0, _getTime.getNowTime)();
                reg = /^\w{6,18}$/;

                if (reg.test(admin.admin_pwd)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", (0, _resultHelper.writeResult)("error", "管理员用户名和密码必须是6-18位的字母数字及下划线", ''));

              case 5:
                _context2.next = 7;
                return _db.AdminDB.updataAdminById(admin);

              case 7:
                res = _context2.sent;
                return _context2.abrupt("return", (0, _resultHelper.writeResult)("success", "修改成功", ''));

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function editAdminById(_x2, _x3) {
        return _editAdminById.apply(this, arguments);
      }

      return editAdminById;
    }() //验证密码是否正确

  }, {
    key: "findAdmin",
    value: function () {
      var _findAdmin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(admin) {
        var admin_name, admin_pwd, res, result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                admin_name = admin.admin_name, admin_pwd = admin.admin_pwd;
                _context3.next = 3;
                return _db.AdminDB.findAdminName(admin_name);

              case 3:
                res = _context3.sent;
                console.log(res, '管理员信息');

                if (!(res.length === 0)) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", result = (0, _resultHelper.writeResult)("error", "帐号不存在", ''));

              case 7:
                if (res[0].admin_pwd === admin_pwd) {
                  result = (0, _resultHelper.writeResult)("success", "信息正确", result);
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

      function findAdmin(_x4) {
        return _findAdmin.apply(this, arguments);
      }

      return findAdmin;
    }() //添加管理员

  }, {
    key: "addAdmin",
    value: function () {
      var _addAdmin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(admin) {
        var res, reg, key, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _db.AdminDB.findAdminName(admin.admin_name);

              case 3:
                res = _context4.sent;
                console.log(res, "查找管理员");

                if (!res.length) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", (0, _resultHelper.writeResult)("error", "管理员用户名已经存在", ''));

              case 7:
                reg = /^\w{6,18}$/;
                _context4.t0 = _regenerator["default"].keys(admin);

              case 9:
                if ((_context4.t1 = _context4.t0()).done) {
                  _context4.next = 16;
                  break;
                }

                key = _context4.t1.value;
                console.log(reg.test(admin[key]));

                if (reg.test(admin[key])) {
                  _context4.next = 14;
                  break;
                }

                return _context4.abrupt("return", (0, _resultHelper.writeResult)("error", "管理员用户名和密码必须是6-18位的字母数字及下划线", ''));

              case 14:
                _context4.next = 9;
                break;

              case 16:
                admin.ctime = (0, _getTime.getNowTime)();
                admin.utime = (0, _getTime.getNowTime)();
                _context4.next = 20;
                return _db.AdminDB.insertAdmin(admin);

              case 20:
                result = _context4.sent;
                return _context4.abrupt("return", (0, _resultHelper.writeResult)("success", "添加成功", result));

              case 24:
                _context4.prev = 24;
                _context4.t2 = _context4["catch"](0);
                console.log(_context4.t2);

              case 27:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 24]]);
      }));

      function addAdmin(_x5) {
        return _addAdmin.apply(this, arguments);
      }

      return addAdmin;
    }() //添加管理员

  }, {
    key: "editAdmin",
    value: function () {
      var _editAdmin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id, admin) {
        var reg, key, result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                reg = /^\w{6,18}$/;
                _context5.t0 = _regenerator["default"].keys(admin);

              case 3:
                if ((_context5.t1 = _context5.t0()).done) {
                  _context5.next = 9;
                  break;
                }

                key = _context5.t1.value;

                if (reg.test(admin[key])) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt("return", (0, _resultHelper.writeResult)("error", "管理员密码必须是6-18位的字母数字及下划线", ''));

              case 7:
                _context5.next = 3;
                break;

              case 9:
                admin.utime = (0, _getTime.getNowTime)();
                _context5.next = 12;
                return _db.AdminDB.insertAdmin(admin);

              case 12:
                result = _context5.sent;
                return _context5.abrupt("return", (0, _resultHelper.writeResult)("success", "添加成功", result));

              case 16:
                _context5.prev = 16;
                _context5.t2 = _context5["catch"](0);
                console.log(_context5.t2);

              case 19:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 16]]);
      }));

      function editAdmin(_x6, _x7) {
        return _editAdmin.apply(this, arguments);
      }

      return editAdmin;
    }() //按页查询管理员

  }, {
    key: "FindByCondition",
    value: function () {
      var _FindByCondition = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(obj) {
        var res, count, result;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                obj.page = Number(obj.page);
                obj.limit = Number(obj.limit);
                _context6.next = 4;
                return _db.AdminDB.searchAdminByPage(obj);

              case 4:
                res = _context6.sent;
                _context6.next = 7;
                return AdminService.getCount();

              case 7:
                count = _context6.sent;
                result = (0, _resultHelper.writeResult)("success", "查询成功", {
                  result: res,
                  count: count.data[0].count
                });
                return _context6.abrupt("return", result);

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function FindByCondition(_x8) {
        return _FindByCondition.apply(this, arguments);
      }

      return FindByCondition;
    }() // 获得管理员 总数

  }, {
    key: "getCount",
    value: function () {
      var _getCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var res, result;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _db.AdminDB.searchAdminCount();

              case 2:
                res = _context7.sent;
                result = (0, _resultHelper.writeResult)("success", "查询成功", res);
                return _context7.abrupt("return", result);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getCount() {
        return _getCount.apply(this, arguments);
      }

      return getCount;
    }()
  }]);
  return AdminService;
}();

exports.AdminService = AdminService;