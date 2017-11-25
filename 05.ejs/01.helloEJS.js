var express = require("express");
var app = express();

app.set("view engine" , "ejs");
app.set("views" , "views");

/*
	EJS 是 Express 中的模板引擎，通过EJS可以在服务器中 快速的动态的生成网页
	EJS的使用步骤 ：
		1.下载安装ejs
			npm i ejs --save
		2.设置ejs为Express的模板引擎
			app.set("view engine","ejs");
		3.设置模板的存放目录
			app.set("views","views");
		4.在views目录下创建一个ejs模板文件
		5.通过res.render()来对模板进行渲染

 */

app.get("/helloEJS" , function (req , res) {

	//渲染hello.ejs模板，并将渲染的结果返回给客户端
	//res.render("hello" , {username:"<span>孙悟空</span>" , age:18 , gender:"男" , obj:{}});

	//app.locals.username = "哈哈";

	res.send("Hello EJS");
});

/*app.use("/index", function (req , res , next) {

	res.locals.username = "嘿嘿嘿嘿";

	next();
});*/

app.get("/index",function (req , res) {

	//可以向res.locals中添加属性，这样这些属性也可以在ejs中访问
	//res.locals.username = "哈哈哈";
	//通过res.locals 可以在其他路由中来设置参数

	//也可以将变量设置到app.locals中，这样在ejs模板中也可以访问
	//app.locals是整个应用范围内，只要设置一次，服务器中所有的路由都可以访问
	//app.locals.username = "红孩儿";

	app.locals.username = "app中的变量";


	res.render("index");
});



app.listen(3000 , function () {
	console.log("ok");
});