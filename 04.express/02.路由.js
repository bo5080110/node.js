var exrpess = require("express");
var app = exrpess();

/*
	路由（router）
		- 路由可以将请求地址和Node中的函数进行映射，
			这样当前服务器收到请求时，就可以调用对应的函数来对请求进行处理
		- 设置路由主要三种方式：
			app.get() get路由
			app.post() post路由
			app.all() 处理所有请求的路由


	路由的运行的流程
		- 当客户端访问服务器时，服务器收到客户端的请求，
			服务器会首先检查服务器中是否有和该请求对应的路由（请求方法一致，请求路径一致），
			如果有，服务器会自动创建一个request 和 response对象，
			并以该两个对象为参数来调用路由的回调函数

			如果没有与当前请求对应的路由，则服务器会返回一个404

			request
				- 客户端发送给服务器请求报文，可以通过request来获取客户端的请求信息

			response
				- 服务器发送给客户端的响应报文，可以通过response来响应客户端的请求

 */

//通过路由可以将请求地址和函数进行映射，这样当客户端访问地址时，将会调用指定的函数来处理请求
//路由的回调函数在执行时，会有两个参数被传递进来 第一个叫 request 代表请求报文（客户端 -> 服务器）
//第二个叫 response 代表响应报文(服务器 -> 客户端)
app.get("/hello/abc" , function (req , res) {
	console.log("路由已经收到了请求~~~");

	//通过res，向客户端返回一个响应
	res.send("<h1>这是通过路由返回的响应内容</h1>");

});

app.get("/abc",function (req , res) {
	console.log("abc");

	res.send("Hello ABC");
});

app.get("/testReq" , function (req  , res) {

	/*
		req 是客户端发送给服务器的请求报文，通过req可以获取到客户端发送的所有的请求信息
			请求报文中有什么，req就能获取到什么

		 req.originalUrl
			- 获取完整的资源的路径
					/testReq?username=abc&password=123123
		 req.path
		 	- 获取资源的路径（不包含查询字符串）
				/testReq

		req.get(header)
			- 获取指定的请求头
			- req.get("user-agent")

	 	req.headers
	 		- 获取所有的请求头
	 		- 返回的是一个对象，对象的属性名是头的名字，属性值是头的值

	 	req.query
	 		- 获取到查询字符串中的请求参数
	 		- query会返回一个对象，对象中保存查询字符串中的所有的参数
	 			属性名是参数的名字（表单项的name属性）
	 			属性值就是参数的值（用户填写的内容）

	 		- { username: 'sunwukong', password: '789789', hobby: [ 'ppq', 'ymq', 'lq' ] }

	 */

	//console.log(req.headers);

	/*console.log(req.query.username);
	console.log(req.query.password);*/

	console.log(req.query);


	res.send("测试Request");

});

app.listen(3000,function () {
	console.log("ok");
});