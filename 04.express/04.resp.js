var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/testRes", function (req , res) {

	/*
		res
			- 服务器返回给客户端的响应报文，通过res可以向客户端返回响应信息
			- 方法和属性
				res.send(body);
					- 设置请求体并发送响应报文
					- send()一旦调用响应报文会直接发送，所以在send()不要对res做其他的操作

				res.status(num)
					- 设置响应状态码

				res.sendStatus(num)
					- 设置并发送响应状态码

	 			res.set(field [, value])
	 				- 设置响应头

	 			res.get(field)
	 				- 获取响应头

	 			res.sendFile(path [, options] [, fn])
	 				- 向客户端响应一个文件 如果该文件是浏览器支持的格式，则会在浏览器中直接打开
	 										如果不支持，则弹出下载

	 			res.download()
	 				- 向客户端响应一个文件用来下载，无论浏览器是否支持该格式，直接弹出下载


	 */
	//res.status(404);


	//res.send("Hello Response");

	//res.sendStatus(404);

	//res.sendFile(__dirname+"\\an.jpg");
	res.download(__dirname+"\\an.jpg");



});

app.get("/testRedirect", function (req , res) {


	/*
	 res.redirect(url)
	 	- 用来发起请求的重定向

	 	重定向：
	 		- 重定向指当客户端向服务器发送请求时，
	 			服务器返回给客户端一个"特殊"的响应，
	 			这个特殊的响应告诉客户端再去向另一个地址发送请求，
	 			客户端收到响应后，会自动向新的地址发送请求

			 HTTP/1.1 302 Found
			 Location: /index.html

			 - 这个特殊的响应的响应状态码是302，当浏览器收到302这个响应状态码，
			 	会自动向Location指向的地址再次发送请求

			 - 重定向至少要发送两次请求


	 */

	//通过res来发起请求的重定向
	//res.redirect("https://www.baidu.com");
	res.redirect("/index.html");


});


app.listen(3000 , function () {
	console.log("ok");
});
