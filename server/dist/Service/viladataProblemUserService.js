"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.find");

require("core-js/modules/es.number.constructor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viladataProblemUserService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _resultHelper = require("../utils/resultHelper");

var _db = require("../db/db");

var viladataProblemUserService = /*#__PURE__*/function () {
  function viladataProblemUserService() {
    (0, _classCallCheck2["default"])(this, viladataProblemUserService);
  }

  (0, _createClass2["default"])(viladataProblemUserService, null, [{
    key: "viladataProblemUser",
    // 按problem_id 查找 problem_user_mapping 表 在按 user_id find 到数据 
    value: function () {
      var _viladataProblemUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(problem_id, user_id) {
        var res, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                problem_id = Number(problem_id);
                user_id = Number(user_id);
                _context.next = 4;
                return _db.ProblemUserMappingDB.searchByProblem(problem_id);

              case 4:
                res = _context.sent;
                data = res.find(function (it) {
                  return it.user_id === user_id;
                });
                return _context.abrupt("return", (0, _resultHelper.writeResult)("success", "查找成功", data));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function viladataProblemUser(_x, _x2) {
        return _viladataProblemUser.apply(this, arguments);
      }

      return viladataProblemUser;
    }()
  }]);
  return viladataProblemUserService;
}();

exports.viladataProblemUserService = viladataProblemUserService;