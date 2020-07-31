"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.date.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

var _resultHelper = require("../utils/resultHelper");

var router = _express["default"].Router();

var storage = _multer["default"].diskStorage({
  destination: _path["default"].resolve(__dirname, "../../public/upload"),
  filename: function filename(req, file, cb) {
    cb(null, new Date().getTime() + _path["default"].extname(file.originalname));
  }
});

var allowExtensions = [".jpg", ".png", ".gif", ".bmp", ".svg", ".tif"];
var upload = (0, _multer["default"])({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 // 文件上传尺寸

  },
  fileFilter: function fileFilter(req, file, cb) {
    var ext = _path["default"].extname(file.originalname);

    if (allowExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error("文件类型不正确"));
    }
  }
}).single('imgfile'); // 文件标识imgfile需要统一

router.post("/", function (req, res) {
  upload(req, res, function (err) {
    // 发生错误
    if (err) {
      console.log(err);
      res.send((0, _resultHelper.writeResult)("error", "头像上传失败", err.message));
      console.log(err);
    } // 一切都好
    else {
        var url = "/upload/".concat(req.file.filename);
        res.send((0, _resultHelper.writeResult)("success", "头像上传成功", url));
      }
  });
});
var _default = router;
exports["default"] = _default;