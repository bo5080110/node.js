var express = require("express");
var app = express();
app.use(express.static("public"));

/*
	创建一个路由，处理用户的登录
 */
app.get("/login", function (req , res) {

	//获取用户的请求参数
	var username = req.query.username;
	var password = req.query.password;

	//验证用户名和密码是否正确
	if(username == "admin" && password == "123123"){
		//用户名密码正确
		res.send("<h3>恭喜您，登录成功~~~</h3>");
	}else{
		//用户名或密码错误
		res.send("<h3 style='color: red'>不好意思，您的用户名或密码好像输错了~~~</h3>");
	}



});

app.listen(3000 , function () {
	console.log("ok")
});