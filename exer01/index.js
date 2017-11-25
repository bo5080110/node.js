var express = require("express");
var sha1 = require("sha1");
//连接数据库
require("./tools/db");
//引入UserModel
var User = require("./models/user");
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
	/*if(username == "admin" && password == "123123"){
		//用户名密码正确
		res.send("<h3>恭喜您，登录成功~~~</h3>");
	}else{
		//用户名或密码错误
		res.send("<h3 style='color: red'>不好意思，您的用户名或密码好像输错了~~~</h3>");
	}*/

	//去数据库中验证用户名和密码是否正确
	User.findOne({username:username},function (err , user) {

		if(!err && user && user.password == sha1(password)  ){
			//登录成功
			res.send("<h3>恭喜您，登录成功~~~</h3>");

		}else{
			//登录失败
			//res.send("<h3 style='color: red'>不好意思，您的用户名或密码好像输错了~~~</h3>");
			//登录失败，回到登录页面重新输入
			//res.redirect("/login.html");

			/*
			 显示页面的方式有两种
				 1.通过html返回一个页面，html返回的页面都是静态页面（数据是死的）
				 2.通过res.send()返回页面，通过send()返回的页面时动态页面（数据可以动态设置）

			  模板引擎：
				- 模板引擎可以为我们提供一个编写好的网页的模板，而且在网页模板可以嵌入变量，
					这些变量会由服务器端负责渲染，这样通过模板的引擎就可以在服务器中动态的生成网页
			 */
			res.send('<!DOCTYPE html>' +
				'<html lang="zh">' +
				'<head>' +
				'<meta charset="UTF-8">' +
				'<title>欢迎登录</title>' +
				'</head>' +
				'<body>' +
				'<h3>欢迎登录</h3>' +
					'<span style="color: red">用户名或密码错误</span>'+
				'</body></html>');

		}


	});



});



/*创建路由来处理注册*/
app.get("/regist",function (req , res) {

	//获取用户的信息
	var username = req.query.username;
	var password = req.query.password;
	var repwd = req.query.repwd;
	var email = req.query.email;

	//验证用户的输入是否合法（略过）

	//console.log(username , password , repwd , email);

	//将用户信息插入到数据库中
	User.create({
		username:username,
		password:sha1(password),
		email:email
	},function (err) {

		if(err){
			//出错了，用户名已存在，注册失败
			//res.send("<h3 style='color: red'>您的用户名已存在</h3>");
			//注册失败，返回到注册页面


		res.redirect("/regist.html");

		}else{
			//注册成功
			res.send("<h3>恭喜您，注册成功~~~</h3>");
		}

	});


});


app.listen(3000,function () {
	console.log("ok");
});