"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.number.constructor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShopService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = require("../db/db");

var _getTime = require("../utils/getTime");

var _resultHelper = require("../utils/resultHelper");

var _shopUserMappingDB = _interopRequireDefault(require("../db/shopUserMappingDB"));

var _userService = require("./userService");

var ShopService = /*#__PURE__*/function () {
  function ShopService() {
    (0, _classCallCheck2["default"])(this, ShopService);
  }

  (0, _createClass2["default"])(ShopService, null, [{
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(obj) {
        var res, shops, shopTags, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                obj.user_id = Number(obj.user_id);
                obj.ctime = (0, _getTime.getNowTime)();
                obj.utime = (0, _getTime.getNowTime)();
                console.log(obj, "add");
                _context2.next = 6;
                return _db.ShopDB.insertShop(obj);

              case 6:
                res = _context2.sent;
                console.log(res, "ShopService add");
                obj.shop_id = res.insertId;
                delete obj.shop_tag_name;
                delete obj.shop_content;
                _context2.next = 13;
                return _shopUserMappingDB["default"].insertShopUserMapping(obj);

              case 13:
                _context2.next = 15;
                return _shopUserMappingDB["default"].searchByUser(obj.user_id);

              case 15:
                shops = _context2.sent;
                shopTags = [];
                shops.map(function (it) {
                  return it.shop_id;
                }).map( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(it, index) {
                    var res;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return ShopService.find(it);

                          case 2:
                            res = _context.sent;
                            console.log(res, "shop_tags_name");
                            shopTags.push(res.data[0].shop_tag_name);

                            if (!(shops.length === shopTags.length)) {
                              _context.next = 8;
                              break;
                            }

                            _context.next = 8;
                            return _userService.UserService.editShopTags(obj.user_id, {
                              shop_tags_name: shopTags.join(",")
                            });

                          case 8:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2, _x3) {
                    return _ref.apply(this, arguments);
                  };
                }());
                result = (0, _resultHelper.writeResult)("success", "添加成功", "");
                return _context2.abrupt("return", result);

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function add(_x) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "find",
    value: function () {
      var _find = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        var res, result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log(id, "find");
                id = Number(id);
                _context3.next = 4;
                return _db.ShopDB.findShop(id);

              case 4:
                res = _context3.sent;
                result = (0, _resultHelper.writeResult)("success", "查询成功", res);
                return _context3.abrupt("return", result);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function find(_x4) {
        return _find.apply(this, arguments);
      }

      return find;
    }()
  }, {
    key: "findByUserId",
    value: function () {
      var _findByUserId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        var res, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = Number(id);
                _context4.next = 3;
                return _db.ShopDB.findShopByUserId(id);

              case 3:
                res = _context4.sent;
                result = (0, _resultHelper.writeResult)("success", "查询成功", res);
                return _context4.abrupt("return", result);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function findByUserId(_x5) {
        return _findByUserId.apply(this, arguments);
      }

      return findByUserId;
    }()
  }, {
    key: "edit",
    value: function () {
      var _edit = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id, obj) {
        var res, result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = Number(id);
                obj.utime = (0, _getTime.getNowTime)();
                _context5.next = 4;
                return _db.ShopDB.updataShopName(obj);

              case 4:
                res = _context5.sent;
                result = (0, _resultHelper.writeResult)("success", "修改成功", res);
                return _context5.abrupt("return", result);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function edit(_x6, _x7) {
        return _edit.apply(this, arguments);
      }

      return edit;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
        var shops, shopTags, result;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                obj.id = Number(id);
                _context6.next = 3;
                return _db.ShopDB.deleteShop(id);

              case 3:
                _context6.next = 5;
                return ShopUserMapping["delete"](id);

              case 5:
                _context6.next = 7;
                return ShopUserMapping.findByUserId(obj.user_id);

              case 7:
                shops = _context6.sent;
                shopTags = shops.map(function (it) {
                  return it.shop_id;
                }).join(",");
                console.log(shopTags, "shopTags");
                _context6.next = 12;
                return _userService.UserService.editShopTags(obj.user_id, shopTags);

              case 12:
                ShopService.findByUserId(user_id);

                _userService.UserService.editShopTags(user_id);

                result = (0, _resultHelper.writeResult)("success", "删除成功", res);
                return _context6.abrupt("return", result);

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function _delete(_x8) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return ShopService;
}();

exports.ShopService = ShopService;