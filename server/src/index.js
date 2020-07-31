import express from 'express'
import problemRoute from './route/problemRoute'
import messageRoute from './route/messageRoute'
import userRoute from './route/userRoute'
import shopRoute from './route/shopRoute'
import adminRoute from './route/adminRoute'
import uploadRoute from './route/uploadRoute'
import viladataProblemUserRoute from './route/viladataProblemUserRoute'

const app = express();

// 配置中间件，解析请求体中的json格式

app.use(express.json({ limit: '5mb' }));

// app.use(express.cookieParser());
// app.use(express.cookieParser('some secret'),
app.use("/upload", express.static("public/upload"));
app.use("/api/problem", problemRoute);
app.use("/api/message", messageRoute);
app.use("/api/user", userRoute);
app.use("/api/shop", shopRoute);
app.use("/api/admin", adminRoute);
app.use("/api/viladataP", viladataProblemUserRoute);
// 文件上传地址
app.use("/api/upload", uploadRoute);


app.listen(3001)