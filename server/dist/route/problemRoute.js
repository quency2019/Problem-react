"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _problemService = require("../service/problemService");

var router = _express["default"].Router(); // 按页查询problem


router.get('/byCondition', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _problemService.ProblemService.FindByCondition(req.query);

          case 2:
            result = _context.sent;
            res.send(result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()); // 按页 search 查询problem

router.get('/bySearch', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(req.query);
            _context2.next = 3;
            return _problemService.ProblemService.FindBySearch(req.query);

          case 3:
            result = _context2.sent;
            res.send(result);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()); // 得到最新problem

router.get('/new', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _problemService.ProblemService.getNewProblem(req.query.size);

          case 2:
            result = _context3.sent;
            res.send(result);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}()); // 得到热门problem

router.get('/hot', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _problemService.ProblemService.getHotProblem(req.query.size);

          case 2:
            result = _context4.sent;
            res.send(result);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}()); // 得到tag

router.get('/tags', /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _problemService.ProblemService.getAllTags();

          case 2:
            result = _context5.sent;
            res.send(result);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}()); // 添加problem

router.post('/add', /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _problemService.ProblemService.add(req.body);

          case 2:
            result = _context6.sent;
            res.send(result);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}()); // 修改problem

router.put('/:id', /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _problemService.ProblemService.edit(req.params.id, req.body);

          case 2:
            result = _context7.sent;
            res.send(result);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}()); // 按ID删除problem

router["delete"]('/:id', /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _problemService.ProblemService["delete"](req.params.id);

          case 2:
            result = _context8.sent;
            res.send(result);

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}()); // 按ID查询problem

router.get('/:id', /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _problemService.ProblemService.FindById(req.params.id);

          case 2:
            result = _context9.sent;
            res.send(result);

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}()); // 添加浏览次数

router.put('/addViews/:id', /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return _problemService.ProblemService.addViews(req.params.id);

          case 2:
            result = _context10.sent;
            res.send(result);

          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}()); // 修改喜欢次数

router.put('/editLove/:id', /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            console.log(req.body, "req.body");
            _context11.next = 3;
            return _problemService.ProblemService.editLove(req.params.id, req.body.params.user_id);

          case 3:
            result = _context11.sent;
            res.send(result);

          case 5:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}()); //修改点赞次数

router.put('/editGood/:id', /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return _problemService.ProblemService.editGood(req.params.id, req.body.params.user_id);

          case 2:
            result = _context12.sent;
            res.send(result);

          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;