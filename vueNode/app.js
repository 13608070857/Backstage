const express = require("express");
const app = express();

const logger = require("morgan");
const favicon = require("serve-favicon");
const bodyparser = require("body-parser");

const cookieParser=require("cookie-parser");
const session=require("express-session");
const router = require("./routes/manageRouter");
app.use(logger("dev"));
app.use(favicon(__dirname + "/public/favicon.ico"));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(session({
    name:"demo",
    secret:"123123123",//密钥
    cookie:{maxAge:1000*60*60*24*30},//cookie有效时间30天，单位毫秒
    resave:true,//更新session-cookie的失效时间
    rolling:true,//更新保存
    saveUninitialized:true //未初始化的cookie要不要保存
}));
app.use("*",(req,resp,next)=> {
	resp.header("Access-Control-Allow-Origin","*");
  resp.header("Access-Control-Allow-Headers","X-Requested-With");
  resp.header("Access-Control-Allow-Method","GET,POST,DELETE,OPTIONS");
	resp.header("Content-Type","application/json;charset=utf-8");
	next();
});
app.use(router);

app.use(express.static(__dirname+"/public"));

app.set("port",8888);
app.listen(8888,function() {
    console.log("启动服务器");
});
