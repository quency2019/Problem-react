"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.search");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProblemService = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = require("../db/db");

var _resultHelper = require("../utils/resultHelper");

var _getTime = require("../utils/getTime");

var _problemDB = _interopRequireDefault(require("../db/problemDB"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ProblemService = /*#__PURE__*/function () {
  function ProblemService() {
    (0, _classCallCheck2["default"])(this, ProblemService);
  }

  (0, _createClass2["default"])(ProblemService, null, [{
    key: "add",
    //增加problem
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(obj) {
        var res, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                obj.tags = obj.tags.replace(/ /g, "").replace("，", ",");
                obj.views = Number(obj.views);
                obj.love = Number(obj.love);
                obj.good = Number(obj.good);
                obj.ctime = (0, _getTime.getNowTime)();
                obj.utime = (0, _getTime.getNowTime)();
                _context.next = 8;
                return _db.ProblemDB.insertProblem(obj);

              case 8:
                res = _context.sent;

                if (res) {
                  result = (0, _resultHelper.writeResult)("error", "添加失败", res);
                }

                result = (0, _resultHelper.writeResult)("success", "添加成功", '');
                return _context.abrupt("return", result);

              case 12:
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
    }() //修改problem

  }, {
    key: "edit",
    value: function () {
      var _edit = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id, obj) {
        var result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                obj.id = Number(id);
                obj.tags = obj.tags.replace(/ /g, "").replace("，", ",");
                obj.utime = (0, _getTime.getNowTime)();
                _context2.next = 5;
                return _db.ProblemDB.updateProblem(obj);

              case 5:
                result = (0, _resultHelper.writeResult)("success", "修改成功", "");
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
    }() // 按id删除problem 

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
                console.log(id);
                _context3.next = 4;
                return _db.ProblemDB.deleteProblem(id);

              case 4:
                res = _context3.sent;
                result = (0, _resultHelper.writeResult)("success", "删除成功", "");
                return _context3.abrupt("return", result);

              case 7:
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
    }() //按页查询problem

  }, {
    key: "FindByCondition",
    value: function () {
      var _FindByCondition = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(obj) {
        var res, count, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                //字符串转换成数字
                obj.page = Number(obj.page);
                obj.limit = Number(obj.limit);
                _context4.next = 4;
                return _db.ProblemDB.searchProblemByPage(obj);

              case 4:
                res = _context4.sent;
                _context4.next = 7;
                return ProblemService.getCount();

              case 7:
                count = _context4.sent;
                // result[i].content = result[i].content.replace(/<[a-zA-Z]+>/g, "");
                // result[i].content = result[i].content.replace(/<\/[a-zA-Z]+>/g, "");
                // result[i].content = result[i].content.replace(/<img src="data:image\/jpeg;[\w\W]+>/g, "");
                // for (let i = 0; i < res.length; i++) {
                //     //过滤图片
                //     res[i].content = res[i].content.replace(/<img[\w\W]*">/, "")
                //     // res[i].content = res[i].content.replace(/<img[\w\W]*">/, "").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                //     //过滤标签
                //     res[i].content = res[i].content.replace(/<[\w\W]{1,5}>/g, "")
                //     //限制字数300
                //     res[i].content = res[i].content.substring(0, 300)
                // }
                obj.content = obj.content.replace(/<img[\w\W]*">/, "").replace(/</g, "&lt").replace(/>/g, "&gt");
                result = (0, _resultHelper.writeResult)("success", "查询成功", {
                  result: res,
                  count: count.data[0].count
                });
                return _context4.abrupt("return", result);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function FindByCondition(_x5) {
        return _FindByCondition.apply(this, arguments);
      }

      return FindByCondition;
    }() //按页 search 查询problem

  }, {
    key: "FindBySearch",
    value: function () {
      var _FindBySearch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(obj) {
        var result, count, res, count1, _res, _count, result2;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                //字符串转换成数字
                console.log(obj, "FindBySearch");
                obj.page = Number(obj.page);
                obj.limit = Number(obj.limit);

                if (!(obj.search === "")) {
                  _context5.next = 15;
                  break;
                }

                console.log(obj, 'searchProblemByPage');
                _context5.next = 7;
                return _db.ProblemDB.searchProblemByPage(obj);

              case 7:
                res = _context5.sent;
                _context5.next = 10;
                return ProblemService.getCount();

              case 10:
                count1 = _context5.sent;
                result = res;
                count = count1.data[0].count;
                _context5.next = 27;
                break;

              case 15:
                _context5.next = 17;
                return _db.ProblemDB.searchProblemBySearch(obj);

              case 17:
                _res = _context5.sent;

                if (!(_res.length === 0)) {
                  _context5.next = 22;
                  break;
                }

                _count = 0;
                _context5.next = 26;
                break;

              case 22:
                _context5.next = 24;
                return _problemDB["default"].searchProblemBySearchCount(obj);

              case 24:
                _count = _context5.sent;
                count = _count.data[0].count;

              case 26:
                result = _res;

              case 27:
                // for (let i = 0; i < res.length; i++) {
                //     res[i].content = res[i].content.replace(/<img[\w\W]*">/, "").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                // }
                // obj.content = obj.content.replace(/<img[\w\W]*">/, "").replace(/</g, "&lt").replace(/>/g, "&gt")
                result2 = (0, _resultHelper.writeResult)("success", "查询成功", {
                  result: result,
                  count: count
                });
                console.log(result2);
                return _context5.abrupt("return", result2);

              case 30:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function FindBySearch(_x6) {
        return _FindBySearch.apply(this, arguments);
      }

      return FindBySearch;
    }() // 按id查询problem 

  }, {
    key: "FindById",
    value: function () {
      var _FindById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
        var res, result;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                id = Number(id);
                console.log(id, "id");
                _context6.next = 4;
                return _db.ProblemDB.searchProblemById(id);

              case 4:
                res = _context6.sent;
                result = (0, _resultHelper.writeResult)("success", "查询成功", res);
                return _context6.abrupt("return", result);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function FindById(_x7) {
        return _FindById.apply(this, arguments);
      }

      return FindById;
    }() // 获得最新problem 

  }, {
    key: "getNewProblem",
    value: function () {
      var _getNewProblem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(size) {
        var res, result;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                size = Number(size);
                console.log(size, "size");
                _context7.next = 4;
                return _db.ProblemDB.searchNewProblem(size);

              case 4:
                res = _context7.sent;
                result = (0, _resultHelper.writeResult)("success", "查询成功", res);
                return _context7.abrupt("return", result);

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getNewProblem(_x8) {
        return _getNewProblem.apply(this, arguments);
      }

      return getNewProblem;
    }() // 获得热门problem 

  }, {
    key: "getHotProblem",
    value: function () {
      var _getHotProblem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(size) {
        var res, result;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                size = Number(size);
                _context8.next = 3;
                return _db.ProblemDB.searchHotProblem(size);

              case 3:
                res = _context8.sent;
                result = (0, _resultHelper.writeResult)("success", "查询成功", res);
                return _context8.abrupt("return", result);

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function getHotProblem(_x9) {
        return _getHotProblem.apply(this, arguments);
      }

      return getHotProblem;
    }() // 获得problem 总数

  }, {
    key: "getCount",
    value: function () {
      var _getCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
        var res, result;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _db.ProblemDB.searchProblemCount();

              case 2:
                res = _context9.sent;
                result = (0, _resultHelper.writeResult)("success", "查询成功", res);
                return _context9.abrupt("return", result);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function getCount() {
        return _getCount.apply(this, arguments);
      }

      return getCount;
    }() //增加浏览次数

  }, {
    key: "addViews",
    value: function () {
      var _addViews = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(id) {
        var res, result;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                id = Number(id);
                _context10.next = 3;
                return _db.ProblemDB.addViews(id);

              case 3:
                res = _context10.sent;
                result = (0, _resultHelper.writeResult)("success", "添加成功", "");
                return _context10.abrupt("return", result);

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function addViews(_x10) {
        return _addViews.apply(this, arguments);
      }

      return addViews;
    }() //增加减少点赞次数 //id===problem_id

  }, {
    key: "editGood",
    value: function () {
      var _editGood = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(id, user_id) {
        var re, re1, result, res, newM, _res2, _newM, _res3, obj, _result;

        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                id = Number(id);
                _context11.next = 3;
                return _db.ProblemUserMappingDB.searchByProblem(id);

              case 3:
                re = _context11.sent;
                delete re.ctime;
                re1 = re.find(function (i) {
                  return i.user_id === user_id;
                });

                if (!(re1 && (re1.good === 0 || re1.love === 0 || re1.good === 1 || re1.love === 1))) {
                  _context11.next = 27;
                  break;
                }

                if (!(re1.good === 1)) {
                  _context11.next = 17;
                  break;
                }

                _context11.next = 10;
                return _db.ProblemDB.reduceGood(id);

              case 10:
                res = _context11.sent;
                newM = _objectSpread(_objectSpread({}, re1), {}, {
                  good: 0,
                  utime: (0, _getTime.getNowTime)()
                });
                _context11.next = 14;
                return _db.ProblemUserMappingDB.updateProblemUserMapping(newM);

              case 14:
                result = (0, _resultHelper.writeResult)("success", "减少成功", "");
                _context11.next = 24;
                break;

              case 17:
                _context11.next = 19;
                return _db.ProblemDB.addGood(id);

              case 19:
                _res2 = _context11.sent;
                _newM = _objectSpread(_objectSpread({}, re1), {}, {
                  good: 1,
                  utime: (0, _getTime.getNowTime)()
                });
                _context11.next = 23;
                return _db.ProblemUserMappingDB.updateProblemUserMapping(_newM);

              case 23:
                result = (0, _resultHelper.writeResult)("success", "增加成功", "");

              case 24:
                return _context11.abrupt("return", result);

              case 27:
                _context11.next = 29;
                return _db.ProblemDB.addGood(id);

              case 29:
                _res3 = _context11.sent;
                obj = {
                  problem_id: id,
                  user_id: user_id,
                  good: 1,
                  love: 0,
                  ctime: (0, _getTime.getNowTime)(),
                  utime: (0, _getTime.getNowTime)()
                };
                _context11.next = 33;
                return _db.ProblemUserMappingDB.insertProblemUserMapping(obj);

              case 33:
                _result = (0, _resultHelper.writeResult)("success", "增加成功", "");
                return _context11.abrupt("return", _result);

              case 35:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function editGood(_x11, _x12) {
        return _editGood.apply(this, arguments);
      }

      return editGood;
    }() //增加减少喜欢次数

  }, {
    key: "editLove",
    value: function () {
      var _editLove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(id, user_id) {
        var re, re1, result, res, newM, _res4, _newM2, _res5, obj, _result2;

        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                id = Number(id);
                _context12.next = 3;
                return _db.ProblemUserMappingDB.searchByProblem(id);

              case 3:
                re = _context12.sent;
                delete re.ctime;
                re1 = re.find(function (i) {
                  return i.user_id === user_id;
                });

                if (!(re1 && (re1.good === 0 || re1.love === 0 || re1.good === 1 || re1.love === 1))) {
                  _context12.next = 28;
                  break;
                }

                console.log(re1, "re1");

                if (!(re1.love === 1)) {
                  _context12.next = 18;
                  break;
                }

                _context12.next = 11;
                return _db.ProblemDB.reduceLove(id);

              case 11:
                res = _context12.sent;
                newM = _objectSpread(_objectSpread({}, re1), {}, {
                  love: 0,
                  utime: (0, _getTime.getNowTime)()
                });
                _context12.next = 15;
                return _db.ProblemUserMappingDB.updateProblemUserMapping(newM);

              case 15:
                result = (0, _resultHelper.writeResult)("success", "减少成功", "");
                _context12.next = 25;
                break;

              case 18:
                _context12.next = 20;
                return _db.ProblemDB.addLove(id);

              case 20:
                _res4 = _context12.sent;
                _newM2 = _objectSpread(_objectSpread({}, re1), {}, {
                  love: 1,
                  utime: (0, _getTime.getNowTime)()
                });
                _context12.next = 24;
                return _db.ProblemUserMappingDB.updateProblemUserMapping(_newM2);

              case 24:
                result = (0, _resultHelper.writeResult)("success", "增加成功", "");

              case 25:
                return _context12.abrupt("return", result);

              case 28:
                _context12.next = 30;
                return _db.ProblemDB.addLove(id);

              case 30:
                _res5 = _context12.sent;
                obj = {
                  problem_id: id,
                  user_id: user_id,
                  good: 0,
                  love: 1,
                  ctime: (0, _getTime.getNowTime)(),
                  utime: (0, _getTime.getNowTime)()
                };
                _context12.next = 34;
                return _db.ProblemUserMappingDB.insertProblemUserMapping(obj);

              case 34:
                _result2 = (0, _resultHelper.writeResult)("success", "增加成功", "");
                return _context12.abrupt("return", _result2);

              case 36:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function editLove(_x13, _x14) {
        return _editLove.apply(this, arguments);
      }

      return editLove;
    }() // 获得problem 总数

  }, {
    key: "getAllTags",
    value: function () {
      var _getAllTags = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13() {
        var res, result;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return _db.TagsDB.findAllTags();

              case 2:
                res = _context13.sent;
                result = (0, _resultHelper.writeResult)("success", "查询成功", res);
                return _context13.abrupt("return", result);

              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      function getAllTags() {
        return _getAllTags.apply(this, arguments);
      }

      return getAllTags;
    }()
  }, {
    key: "getByTagId",
    value: function () {
      var _getByTagId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(id, obj) {
        var res, count, result;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                //字符串转换成数字
                obj.page = Number(obj.page);
                obj.limit = Number(obj.limit);
                _context14.next = 4;
                return _db.TagProblemMappingDB.searchByTag(id, obj);

              case 4:
                res = _context14.sent;
                _context14.next = 7;
                return _db.TagProblemMappingDB.searchByTagCount(id);

              case 7:
                count = _context14.sent;
                result = (0, _resultHelper.writeResult)("success", "查询成功", {
                  result: res,
                  count: count.data[0].count
                });
                return _context14.abrupt("return", result);

              case 10:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      function getByTagId(_x15, _x16) {
        return _getByTagId.apply(this, arguments);
      }

      return getByTagId;
    }()
  }]);
  return ProblemService;
}();

exports.ProblemService = ProblemService;