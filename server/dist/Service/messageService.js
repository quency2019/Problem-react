"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.number.constructor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _resultHelper = require("../utils/resultHelper");

var _getTime = require("../utils/getTime");

var _db = require("../db/db");

var MessageService = /*#__PURE__*/function () {
  function MessageService() {
    (0, _classCallCheck2["default"])(this, MessageService);
  }

  (0, _createClass2["default"])(MessageService, null, [{
    key: "add",
    //增加Message
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(obj) {
        var res, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                obj.ctime = (0, _getTime.getNowTime)();
                obj.utime = (0, _getTime.getNowTime)();
                _context.next = 4;
                return _db.MessageDB.insertMessage(obj);

              case 4:
                res = _context.sent;
                result = (0, _resultHelper.writeResult)("success", "添加成功", res);
                return _context.abrupt("return", result);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function add(_x) {
        return _add.apply(this, arguments);
      }

      return add;
    }() //修改Message

  }, {
    key: "edit",
    value: function () {
      var _edit = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id, obj) {
        var res, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                obj.id = Number(id);
                obj.utime = (0, _getTime.getNowTime)();
                _context2.next = 4;
                return _db.MessageDB.updataMessage(obj);

              case 4:
                res = _context2.sent;
                result = (0, _resultHelper.writeResult)("success", "修改成功", res);
                return _context2.abrupt("return", result);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function edit(_x2, _x3) {
        return _edit.apply(this, arguments);
      }

      return edit;
    }() // 按id删除Message 

  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        var res, result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = Number(id);
                _context3.next = 3;
                return _db.MessageDB.deleteMessage(id);

              case 3:
                res = _context3.sent;
                result = (0, _resultHelper.writeResult)("success", "删除成功", res);
                return _context3.abrupt("return", result);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function _delete(_x4) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }() //按页查询Message //通过problem id  获取到评论

  }, {
    key: "FindByCondition",
    value: function () {
      var _FindByCondition = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, obj) {
        var data, count, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                //字符串转换成数字
                obj.problem_id = Number(id);
                obj.page = Number(obj.page);
                obj.limit = Number(obj.limit);
                console.log(obj, "obj");
                _context4.next = 6;
                return _db.MessageDB.searchMessageByProblemIdAndPage(obj);

              case 6:
                data = _context4.sent;
                _context4.next = 9;
                return _db.MessageDB.searchMessageCountByProblemId(obj.problem_id);

              case 9:
                count = _context4.sent;
                console.log(count, "count");
                console.log(data, "data");
                result = (0, _resultHelper.writeResult)("success", "查询成功", {
                  data: data,
                  count: count
                });
                return _context4.abrupt("return", result);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function FindByCondition(_x5, _x6) {
        return _FindByCondition.apply(this, arguments);
      }

      return FindByCondition;
    }() // 按id查询Message 

  }, {
    key: "FindById",
    value: function () {
      var _FindById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        var res, result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = Number(id);
                console.log(id, "FindById");
                _context5.next = 4;
                return _db.MessageDB.searchMessageById(id);

              case 4:
                res = _context5.sent;
                result = (0, _resultHelper.writeResult)("success", "查询成功", res);
                return _context5.abrupt("return", result);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function FindById(_x7) {
        return _FindById.apply(this, arguments);
      }

      return FindById;
    }() // // 按problem id查询Message 
    // static asyncByProblemId(id) {
    //     id = Number(id)
    //     const res = await MessageDB.searchMessageCountByProblemId(id)
    //     const count =await MessageDB.searchMessageByProblemIdAndPage(id)
    //     const result = writeResult("success", "查询成功", res)
    //     return result
    // }
    // 获得Message 总数

  }, {
    key: "getCount",
    value: function () {
      var _getCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var res, result;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _db.MessageDB.getMessageCount();

              case 2:
                res = _context6.sent;
                result = (0, _resultHelper.writeResult)("success", "查询成功", res);
                return _context6.abrupt("return", result);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getCount() {
        return _getCount.apply(this, arguments);
      }

      return getCount;
    }()
  }]);
  return MessageService;
}();

exports.MessageService = MessageService;