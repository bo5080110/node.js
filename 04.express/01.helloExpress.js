var express = require("express");

//创建一个应用对象
//app代表整个服务器
var app = express();

//配置静态资源
app.use(express.static("public"));

//http://192.168.21.250:3000/hello.html
//监听3000端口并启动服务器
//http协议的默认端口号是 80 ，如果监听的端口是80，则可以省略端口号
//https 协议的默认端口号 443
app.listen(3000,function () {
	console.log("服务器已经启动。。。。")
});