var express = require("express");
//引入body-parser
var bodyParser = require("body-parser");
//引入cookie-parser
var cookieParser = require("cookie-parser");

//引入session
var session = require("express-session");

//创建MongoStore
var MongoStore = require('connect-mongo')(session);

//引入mongoose
var mongoose = require("mongoose");

/*
	通过connect-mongo来实现session的持久化
		1.下载安装connect-mongo
 			npm i connect-mongo --save
 		2.引入connect-mongo
 			var MongoStore = require('connect-mongo')(session);
 		3.将MongoStore配置为Session的仓库
			 app.use(session({
				 resave:false,
				 saveUninitialized:false,
				 secret:"todolist",
				 store:new MongoStore({mongooseConnection:mongoose.connection})
			 }));

 */


//连接MongoDB数据库
require("./tools/db");

var app = express();
app.set("view engine" , "ejs");
app.set("views" , "views");
app.use(express.static("public"));

//设置中间件bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

//将session设置为中间件
app.use(session({
	resave:false,
	saveUninitialized:false,
	secret:"todolist",
	store:new MongoStore({mongooseConnection:mongoose.connection})
}));

//创建一个中间件，用来将一个msg对象放入到response中
app.use(function (req , res , next) {

	//将msg对象设置到ejs模板中
	res.locals.msg = {};

	//将Cookie对象设置到ejs模板中
	res.locals.cookie = req.cookies;

	//将session对象设置到ejs模板中
	res.locals.session = req.session;

	next();
});

//设置路由
app.use(require("./router/router"));


//创建一个处理404的中间件
app.use(function (req , res) {
	res.status(404);
	res.render("404");
});

app.listen(3000 , function () {
	console.log("ok");
});
