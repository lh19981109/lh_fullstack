//返回一个app
//require common.js
//ts es6模块化没有问题
import express from 'express'; //es6
//引入路由模块 
import postRouter from '../post/post.router';
const app=express();
//启用中间件 
app.use(
    postRouter //文章路由
)
export default app;