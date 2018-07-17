const express = require("express");
const app = express();

const logger = require("morgan");
const favicon = require("serve-favicon");
const bodyparser = require("body-parser");

const router = require("./routes/userRouter");

app.use(logger("dev"));
app.use(favicon(__dirname + "/public/favicon.ico"));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use('*',(req,resp,next)=> {
	resp.header("Access-Control-Allow-Origin","*");
	resp.header("Access-Control-Allow-Headers","X-Requested-With");
	resp.header("Access-Control-Allow-Method","GET,POST,DELETE,OPTIONS");
	resp.header("Content-Type","application/json;charset=utf-8");
	next();
})
app.use(router);

app.use(express.static(__dirname+"/public"));

app.set("port",8888);
app.listen(8888,function() {
    console.log("启动服务器");
});
