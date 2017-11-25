var express = require("express");
var app = express();
var session = require("express-session");
app.use(session({
	resave:false,
	saveUninitialized:false,
	secret:"hello"
}));


/*
	默认情况下，Express是不支持Session，需要引入express-session来使其支持Session
		使用步骤：
			1.下载安装
				npm i express-session --save
			2.引入
				var session = require("session");
			3.设置为中间件
				app.use(session({
					 resave:false,
					 saveUninitialized:false,
					 secret:"hello"
				}));
 */


app.get("/helloSession" , function (req , res) {

	//console.log(req.session);

	/*
		session就相当于客户端在服务器中的账户，可以将客户端的信息直接保存到Session对象中

		session对象会在req.session第一次被使用时创建，每一个Session对象都有一个唯一的SessionID与其对应，
			session对象创建完毕以后，sessionId会以Cookie的形式发送给浏览器
				 set-cookie: connect.sid=s%3AjkoFKvx3x_oHdmS_v8NAB_-MoiKNzmEE.FG6DmkFZFwCJdXyWEs11AW4%2FOTDId6nGFng5xEP0QN0; Path=/; HttpOnly
			 当浏览器再次访问服务器时，会将sessionID发回，服务器会读取浏览器发回的id
	 			Cookie: connect.sid=s%3Ae3km02JSdaoPnTLJxbk_EnW0UihFP-Yn.UZTudKcGeJOYjvECmv4rZ%2FPJ4scZXpwcmc8abTnf5B4
			 	并根据该id在服务器中寻找对应的session对象，如果找到了则将session对象设置req.session属性
			 如果没有则，会创建一个新的Session对象，并将SessionID，发送给浏览器 依此类推

			 可以将客户端在会话中产生的数据统一保存的session中，这样就可以在服务器中来记录客户端的状态了

	 */
	//向Session中存储一个属性
	req.session.username = "孙悟空";


	res.send("Hello Session");

});


app.get("/helloSession2" , function (req , res) {

	//获取属性
	var username = req.session.username;

	console.log(username);

	res.send("你好 Session");


});

app.listen(3000 , function () {
	console.log("ok");
});
