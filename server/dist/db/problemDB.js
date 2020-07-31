"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.search");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertProblem = insertProblem;
exports.updateProblem = updateProblem;
exports.deleteProblem = deleteProblem;
exports.searchProblemByPage = searchProblemByPage;
exports.searchProblemById = searchProblemById;
exports.searchProblemCount = searchProblemCount;
exports.addViews = addViews;
exports.addGood = addGood;
exports.addLove = addLove;
exports.reduceGood = reduceGood;
exports.reduceLove = reduceLove;
exports.searchHotProblem = searchHotProblem;
exports.searchNewProblem = searchNewProblem;
exports.searchProblemBySearch = searchProblemBySearch;
exports.searchProblemBySearchCount = searchProblemBySearchCount;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("./db");

var _getTime = require("../utils/getTime");

// 添加problem 同时添加tag 和 tag problem 映射表
function insertProblem(_x) {
  return _insertProblem.apply(this, arguments);
} // 修改problem 同时修改tag 和 tag problem 映射表


function _insertProblem() {
  _insertProblem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(obj) {
    var title, content, views, love, good, tags, ctime, utime, sql, params, result, problem_id;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            title = obj.title, content = obj.content, views = obj.views, love = obj.love, good = obj.good, tags = obj.tags, ctime = obj.ctime, utime = obj.utime;
            sql = 'insert into problem(`title`,`content`,`views`,`love`,`good`,`tags`,`ctime`,`utime`) values (?,?,?,?,?,?,?,?)';
            params = [title, content, views, love, good, tags, ctime, utime];
            _context2.prev = 3;
            _context2.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context2.sent;
            console.log(result, "result");

            if (result.message) {
              _context2.next = 12;
              break;
            }

            //  获得problem id
            problem_id = result.insertId; // 字符串标签按，分割成数据遍历

            tags.split(",").forEach( /*#__PURE__*/function () {
              var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ele) {
                var findTagsResult, obj1, res, tag_id, obj2, obj3;
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log(ele); //查看标签表中是否有数据

                        _context.next = 3;
                        return _db.TagsDB.findTags(ele);

                      case 3:
                        findTagsResult = _context.sent;

                        if (findTagsResult[0]) {
                          _context.next = 15;
                          break;
                        }

                        obj1 = {
                          tag: ele,
                          utime: (0, _getTime.getNowTime)(),
                          ctime: (0, _getTime.getNowTime)()
                        };
                        _context.next = 8;
                        return _db.TagsDB.insertTags(obj1);

                      case 8:
                        res = _context.sent;
                        tag_id = res.insertId;
                        obj2 = {
                          tag_id: tag_id,
                          problem_id: problem_id,
                          utime: (0, _getTime.getNowTime)(),
                          ctime: (0, _getTime.getNowTime)()
                        };
                        _context.next = 13;
                        return _db.TagProblemMappingDB.insertTagProblemMapping(obj2);

                      case 13:
                        _context.next = 18;
                        break;

                      case 15:
                        //有便签 则直接根据查询之后的标签ID 和上面的problem ID 创建映射表
                        obj3 = {
                          tag_id: findTagsResult[0].id,
                          problem_id: problem_id,
                          utime: (0, _getTime.getNowTime)(),
                          ctime: (0, _getTime.getNowTime)()
                        };
                        _context.next = 18;
                        return _db.TagProblemMappingDB.insertTagProblemMapping(obj3);

                      case 18:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x15) {
                return _ref.apply(this, arguments);
              };
            }());
            return _context2.abrupt("return", "");

          case 12:
            _context2.next = 19;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](3);
            console.log(_context2.t0);

            if (!(_context2.t0.code === 'ER_DATA_TOO_LONG')) {
              _context2.next = 19;
              break;
            }

            return _context2.abrupt("return", "文件太大了");

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 14]]);
  }));
  return _insertProblem.apply(this, arguments);
}

function updateProblem(_x2) {
  return _updateProblem.apply(this, arguments);
} // 按id删除problem 


function _updateProblem() {
  _updateProblem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(obj) {
    var id, title, content, tags, utime, sql, params, result, problem_id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = obj.id, title = obj.title, content = obj.content, tags = obj.tags, utime = obj.utime;
            sql = 'update problem set title=?,content=?,tags=?, utime=? where id=?';
            params = [title, content, tags, utime, id];
            _context4.prev = 3;
            _context4.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context4.sent;

            if (result.message) {
              _context4.next = 15;
              break;
            }

            //  problem id
            problem_id = id; // 按problem_id删除 tag表 和 mapping 表

            _context4.next = 11;
            return TagsDb.deleteTags(problem_id);

          case 11:
            _context4.next = 13;
            return _db.TagProblemMappingDB.deleteMapping(problem_id);

          case 13:
            // 字符串标签按，分割成数据遍历
            tags.split(",").forEach( /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(ele) {
                var findTagsResult, obj1, res, tag_id, obj2, obj3;
                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        console.log(ele); //查看标签表中是否有数据

                        _context3.next = 3;
                        return findTags(ele);

                      case 3:
                        findTagsResult = _context3.sent;

                        if (findTagsResult[0]) {
                          _context3.next = 15;
                          break;
                        }

                        obj1 = {
                          tag: ele,
                          utime: (0, _getTime.getNowTime)(),
                          ctime: (0, _getTime.getNowTime)()
                        };
                        _context3.next = 8;
                        return _db.TagsDB.insertTags(obj1);

                      case 8:
                        res = _context3.sent;
                        tag_id = res.insertId;
                        obj2 = {
                          tag_id: tag_id,
                          problem_id: problem_id,
                          utime: (0, _getTime.getNowTime)(),
                          ctime: (0, _getTime.getNowTime)()
                        };
                        _context3.next = 13;
                        return _db.TagProblemMappingDB.insertTagProblemMapping(obj2);

                      case 13:
                        _context3.next = 18;
                        break;

                      case 15:
                        //有便签 则直接根据查询之后的标签ID 和上面的problem ID 创建映射表
                        obj3 = {
                          tag_id: findTagsResult[0].id,
                          problem_id: problem_id,
                          utime: (0, _getTime.getNowTime)(),
                          ctime: (0, _getTime.getNowTime)()
                        };
                        _context3.next = 18;
                        return _db.TagProblemMappingDB.insertTagProblemMapping(obj3);

                      case 18:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x16) {
                return _ref2.apply(this, arguments);
              };
            }());
            return _context4.abrupt("return", "");

          case 15:
            _context4.next = 20;
            break;

          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](3);
            console.log(_context4.t0);

          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 17]]);
  }));
  return _updateProblem.apply(this, arguments);
}

function deleteProblem(_x3) {
  return _deleteProblem.apply(this, arguments);
} //按照查询条件查询problem 


function _deleteProblem() {
  _deleteProblem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            console.log(id);
            sql = "delete from problem where id = ?;";
            params = [id];
            _context5.prev = 3;
            _context5.next = 6;
            return (0, _db.sqlQuery)(sql, params);

          case 6:
            result = _context5.sent;
            console.log(result);
            return _context5.abrupt("return", result);

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](3);
            console.log(_context5.t0);

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 11]]);
  }));
  return _deleteProblem.apply(this, arguments);
}

function searchProblemByPage(_x4) {
  return _searchProblemByPage.apply(this, arguments);
} // 按照problem id查询problem 


function _searchProblemByPage() {
  _searchProblemByPage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(obj) {
    var page, limit, sql, params, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log(obj, "searchProblemByPage");
            page = obj.page, limit = obj.limit;
            sql = 'select * from problem order by id desc limit ?,?';
            params = [(page - 1) * limit, limit];
            _context6.prev = 4;
            _context6.next = 7;
            return (0, _db.sqlQuery)(sql, params);

          case 7:
            result = _context6.sent;
            return _context6.abrupt("return", result);

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](4);
            console.log(_context6.t0);

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[4, 11]]);
  }));
  return _searchProblemByPage.apply(this, arguments);
}

function searchProblemById(_x5) {
  return _searchProblemById.apply(this, arguments);
} // 获得problem 总数


function _searchProblemById() {
  _searchProblemById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            console.log(id, "searchProblemById");
            sql = 'select * from problem where id=?';
            params = [id];
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
  return _searchProblemById.apply(this, arguments);
}

function searchProblemCount() {
  return _searchProblemCount.apply(this, arguments);
} //增加浏览次数


function _searchProblemCount() {
  _searchProblemCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
    var sql, result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            sql = 'select count(1) as count from problem';
            _context8.prev = 1;
            _context8.next = 4;
            return (0, _db.sqlQuery)(sql);

          case 4:
            result = _context8.sent;
            return _context8.abrupt("return", result);

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 8]]);
  }));
  return _searchProblemCount.apply(this, arguments);
}

function addViews(_x6) {
  return _addViews.apply(this, arguments);
} //增加点赞次数


function _addViews() {
  _addViews = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            sql = "update problem set views = views + 1 where id = ?;";
            params = [id];
            _context9.prev = 2;
            _context9.next = 5;
            return (0, _db.sqlQuery)(sql, params);

          case 5:
            result = _context9.sent;
            return _context9.abrupt("return", result);

          case 9:
            _context9.prev = 9;
            _context9.t0 = _context9["catch"](2);
            console.log(_context9.t0);

          case 12:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 9]]);
  }));
  return _addViews.apply(this, arguments);
}

function addGood(_x7) {
  return _addGood.apply(this, arguments);
} //增加喜欢次数


function _addGood() {
  _addGood = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            sql = "update problem set good = good + 1 where id = ?;";
            params = [id];
            _context10.prev = 2;
            _context10.next = 5;
            return (0, _db.sqlQuery)(sql, params);

          case 5:
            result = _context10.sent;
            return _context10.abrupt("return", result);

          case 9:
            _context10.prev = 9;
            _context10.t0 = _context10["catch"](2);
            console.log(_context10.t0);

          case 12:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[2, 9]]);
  }));
  return _addGood.apply(this, arguments);
}

function addLove(_x8) {
  return _addLove.apply(this, arguments);
} //减少点赞次数


function _addLove() {
  _addLove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            sql = "update problem set love = love + 1 where id = ?;";
            params = [id];
            _context11.prev = 2;
            _context11.next = 5;
            return (0, _db.sqlQuery)(sql, params);

          case 5:
            result = _context11.sent;
            return _context11.abrupt("return", result);

          case 9:
            _context11.prev = 9;
            _context11.t0 = _context11["catch"](2);
            console.log(_context11.t0);

          case 12:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[2, 9]]);
  }));
  return _addLove.apply(this, arguments);
}

function reduceGood(_x9) {
  return _reduceGood.apply(this, arguments);
} //减少喜欢次数


function _reduceGood() {
  _reduceGood = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            sql = "update problem set good = good - 1 where id = ?;";
            params = [id];
            _context12.prev = 2;
            _context12.next = 5;
            return (0, _db.sqlQuery)(sql, params);

          case 5:
            result = _context12.sent;
            return _context12.abrupt("return", result);

          case 9:
            _context12.prev = 9;
            _context12.t0 = _context12["catch"](2);
            console.log(_context12.t0);

          case 12:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[2, 9]]);
  }));
  return _reduceGood.apply(this, arguments);
}

function reduceLove(_x10) {
  return _reduceLove.apply(this, arguments);
} // 得到热门problem 


function _reduceLove() {
  _reduceLove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(id) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            sql = "update problem set love = love - 1 where id = ?;";
            params = [id];
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
  return _reduceLove.apply(this, arguments);
}

function searchHotProblem(_x11) {
  return _searchHotProblem.apply(this, arguments);
} // 得到热门problem 


function _searchHotProblem() {
  _searchHotProblem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(size) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            sql = "select * from problem order by views desc limit ?;";
            params = [size];
            _context14.prev = 2;
            _context14.next = 5;
            return (0, _db.sqlQuery)(sql, params);

          case 5:
            result = _context14.sent;
            return _context14.abrupt("return", result);

          case 9:
            _context14.prev = 9;
            _context14.t0 = _context14["catch"](2);
            console.log(_context14.t0);

          case 12:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[2, 9]]);
  }));
  return _searchHotProblem.apply(this, arguments);
}

function searchNewProblem(_x12) {
  return _searchNewProblem.apply(this, arguments);
} // title content tags  模糊查询


function _searchNewProblem() {
  _searchNewProblem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(size) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            sql = "select * from problem order by ctime desc limit ?;";
            params = [size];
            _context15.prev = 2;
            _context15.next = 5;
            return (0, _db.sqlQuery)(sql, params);

          case 5:
            result = _context15.sent;
            return _context15.abrupt("return", result);

          case 9:
            _context15.prev = 9;
            _context15.t0 = _context15["catch"](2);
            console.log(_context15.t0);

          case 12:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[2, 9]]);
  }));
  return _searchNewProblem.apply(this, arguments);
}

function searchProblemBySearch(_x13) {
  return _searchProblemBySearch.apply(this, arguments);
} // 得到模糊查询总数


function _searchProblemBySearch() {
  _searchProblemBySearch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(obj) {
    var page, limit, search, sql, params, result;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            console.log(obj, "searchProblemBySearch");
            page = obj.page, limit = obj.limit, search = obj.search;
            sql = "select * from problem where title like concat(concat('%', ?), '%') or content like concat(concat('%', ?), '%')or tags like concat(concat('%', ?), '%') limit ?,?;";
            params = [search, search, search, (page - 1) * limit, limit];
            _context16.prev = 4;
            _context16.next = 7;
            return (0, _db.sqlQuery)(sql, params);

          case 7:
            result = _context16.sent;
            console.log(result);
            return _context16.abrupt("return", result);

          case 12:
            _context16.prev = 12;
            _context16.t0 = _context16["catch"](4);
            console.log(_context16.t0);

          case 15:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[4, 12]]);
  }));
  return _searchProblemBySearch.apply(this, arguments);
}

function searchProblemBySearchCount(_x14) {
  return _searchProblemBySearchCount.apply(this, arguments);
}

function _searchProblemBySearchCount() {
  _searchProblemBySearchCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(search) {
    var sql, params, result;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            sql = "select count(1) as count from problem where title like \"%?%\" or content like \"%?%\";";
            params = [search, search];
            _context17.prev = 2;
            _context17.next = 5;
            return (0, _db.sqlQuery)(sql, params);

          case 5:
            result = _context17.sent;
            return _context17.abrupt("return", result);

          case 9:
            _context17.prev = 9;
            _context17.t0 = _context17["catch"](2);
            console.log(_context17.t0);

          case 12:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[2, 9]]);
  }));
  return _searchProblemBySearchCount.apply(this, arguments);
}

var _default = {
  reduceGood: reduceGood,
  reduceLove: reduceLove,
  insertProblem: insertProblem,
  deleteProblem: deleteProblem,
  searchProblemByPage: searchProblemByPage,
  addViews: addViews,
  addGood: addGood,
  addLove: addLove,
  searchHotProblem: searchHotProblem,
  searchNewProblem: searchNewProblem,
  searchProblemById: searchProblemById,
  searchProblemCount: searchProblemCount,
  searchProblemBySearchCount: searchProblemBySearchCount,
  searchProblemBySearch: searchProblemBySearch,
  updateProblem: updateProblem
};
exports["default"] = _default;