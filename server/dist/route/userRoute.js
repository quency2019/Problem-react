"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.find");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _userService = require("../Service/userService");

var router = _express["default"].Router(); // 通过id获取到用户


router.get('/findById/:id', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _userService.UserService.findById(req.params.id);

          case 2:
            result = _context.sent;
            console.log(result);
            res.send(result);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()); // 按页查询用户

router.get('/byPage', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _userService.UserService.FindByCondition(req.query);

          case 2:
            result = _context2.sent;
            res.send(result);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()); //添加用户

router.post('/add', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _userService.UserService.add(req.body);

          case 2:
            result = _context3.sent;
            console.log(result);
            res.send(result);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}()); //删除用户

router["delete"]('/delete/:id', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log(req.params.id);
            _context4.next = 3;
            return _userService.UserService["delete"](req.params.id);

          case 3:
            result = _context4.sent;
            console.log(result);
            res.send(result);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}()); // 得到用户名 密码 验证信息

router.post('/find', /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _userService.UserService.find(req.body);

          case 2:
            result = _context5.sent;
            console.log(result);
            res.send(result);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}()); // 得到用户名 验证信息

router.post('/findByName', /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log(req.body);
            _context6.next = 3;
            return _userService.UserService.findByName(req.body);

          case 3:
            result = _context6.sent;
            console.log(result);
            res.send(result);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}()); // 修改用户名 密码 

router.put('/:id', /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _userService.UserService.editPwd(req.params.id, req.body);

          case 2:
            result = _context7.sent;
            console.log(result);
            res.send(result);

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}()); // 修改用户头像

router.put('/photo/:id', /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            console.log(req.params.id, req.body);
            _context8.next = 3;
            return _userService.UserService.editPhoto(req.params.id, req.body);

          case 3:
            result = _context8.sent;
            console.log(result);
            res.send(result);

          case 6:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}()); // 修改用户购物车

router.put('/shopping/:id', /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _userService.UserService.editShopping(req.params.id, req.body);

          case 2:
            result = _context9.sent;
            console.log(result);
            res.send(result);

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}()); // // 修改用户题目名
// router.put('/shop_tags_name/:id', async (req, res) => {
//     const result = await UserService.editShopTags(req.params.id, req.body)
//     console.log(result)
//     res.send(result)
// })

var _default = router;
exports["default"] = _default;