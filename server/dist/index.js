"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _problemRoute = _interopRequireDefault(require("./route/problemRoute"));

var _messageRoute = _interopRequireDefault(require("./route/messageRoute"));

var _userRoute = _interopRequireDefault(require("./route/userRoute"));

var _shopRoute = _interopRequireDefault(require("./route/shopRoute"));

var _adminRoute = _interopRequireDefault(require("./route/adminRoute"));

var _uploadRoute = _interopRequireDefault(require("./route/uploadRoute"));

var _viladataProblemUserRoute = _interopRequireDefault(require("./route/viladataProblemUserRoute"));

var app = (0, _express["default"])(); // 配置中间件，解析请求体中的json格式

app.use(_express["default"].json({
  limit: '5mb'
})); // app.use(express.cookieParser());
// app.use(express.cookieParser('some secret'),

app.use("/upload", _express["default"]["static"]("public/upload"));
app.use("/api/problem", _problemRoute["default"]);
app.use("/api/message", _messageRoute["default"]);
app.use("/api/user", _userRoute["default"]);
app.use("/api/shop", _shopRoute["default"]);
app.use("/api/admin", _adminRoute["default"]);
app.use("/api/viladataP", _viladataProblemUserRoute["default"]); // 文件上传地址

app.use("/api/upload", _uploadRoute["default"]);
app.listen(3001);