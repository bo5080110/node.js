var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
app.use(cookieParser());

/*
	cookie-parser
		- 该中间件可以用来帮助解析请求报文中的cookie
		- 使用步骤：
			1.下载安装
				npm i cookie-parser --save

			2.引入
				var cookieParser = require("cookie-parser");

			3.设置中间件
				app.use(cookieParser());
 */

app.get("/testCookie",function (req , res) {

	//当用户访问testCookie时，在服务器中制作cookie并将其发送给客户端
	/*
	 res.cookie(name,value);
	 	- 向响应报文中设置一个Cookie
	 */
	res.cookie("username" , "sunwukong");
	res.cookie("age","18");
	res.cookie("gender","male");


	//发送响应报文
	res.send("Cookie已经发送给浏览器~~~");

});

app.get("/testCookie2",function (req , res) {

	//Cookie: username=sunwukong; age=18; gender=male
	//读取浏览器发回的Cookie
	var cookie = req.get("cookie");

	console.log(typeof cookie);
	console.log(cookie);
	console.log(cookie.username);

	res.send("读取Cookie！！！");

});

app.get("/testCookie3",function (req , res) {

	/*
		引入cookie-parser以后，会自动将请求报文中的cookie解析，
			解析为对象，并设置进req的cookies属性中
	 */
	console.log(req.cookies.username);
	console.log(req.cookies.age);
	console.log(req.cookies.gender);
	console.log(req.cookies);


	res.send("Hello Cookie");

});

app.get("/testCookie4",function (req , res) {

	//设置一个有效期为1分钟的Cookie
	//res.cookie("username","sunwukong",{maxAge:1000*60});

	//设置一个永久有效的Cookie
	res.cookie("username","sunwukong",{maxAge:1000*60*60*24*365*10});

	//设置一个立即失效的Cookie
	//res.cookie("username","sunwukong",{maxAge:0});

	res.send("发送Cookie")


});

app.get("/testCookie5",function (req , res) {

	/*
		Cookie一旦发送给客户端，服务器就不能再修改了。
			但是可以使用同名的Cookie来替换旧的Cookie
	 */
	//res.cookie("username","shaheshang");

	/*
		删除Cookie
			- 可以使用一个立即失效的Cookie来替换已有的Cookie，来达到删除的目的
	 */
	//res.cookie("username","",{maxAge:0});

	/*
	 res.clearCookie()
	 	- 删除指定的cookie
	 */
	res.clearCookie("username");


	res.send("修改Cookie");
});


app.listen(3000 , function () {
	console.log("ok");
});
