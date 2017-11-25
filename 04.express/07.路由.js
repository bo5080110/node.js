var express = require("express");
var app = express();

var router = require("./router/router");

app.use(express.static("public"));




//将路由以中间件的形式设置到app上
app.use("/abc",router);

//app.use(require("./router/router"));





app.listen(3000 , function () {
	console.log("ok");
});
