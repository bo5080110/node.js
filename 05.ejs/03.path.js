var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine" , "ejs");
app.set("views" , "views");

app.get("/path",function (req , res) {

	res.render("path");
});

app.listen(3000 , function () {
	console.log("ok");
});

/*
	路径的问题

		真实路径（物理路径）
 			C:\Users\lilichao\WebstormProjects\class0816\05.ejs\public\img\an.jpg
 			- 物理路径，是文件在计算机磁盘中的路径，通过这个路径可以在计算机中找到对应的文件，
 				但是这个路径只能在计算机的本地使用

		虚拟路径
 			http://127.0.0.1:3000/img/an.jpg
 			- 虚拟路径，是文件在网络中使用的路径，它是一个虚拟的，
 				但是虚拟路径一般会和真实路径中的某个资源相对应

 			- url（实现）    uri（标准）

 			- url地址
 				协议://ip地址:端口号/路径/资源名?查询字符串

 				http://127.0.0.1:3000/hello.html

 			- 相对路径
 				- 相对路径外部资源相对于当前资源所在目录的路径（相对路径是相对于虚拟路径）
 					相对路径：协议://ip地址:端口号/路径/

 					http://127.0.0.1:3000/hello.html
 						an.jpg
						http://127.0.0.1:3000/an.jpg

 					http://127.0.0.1:3000/abc/hello.html
 						an.jpg
 						http://127.0.0.1:3000/abc/an.jpg

 					EJS模板的相对路径，由路由映射的地址决定

 					当文件的所在路径发生改变时，相对路径会随之改变

 				- 绝对路径
 					- 绝对路径总是相对于服务器的根目录来计算
 						协议://ip地址:端口号/
 					- 绝对路径使用 / 开头，/总是代表的服务器的根目录
 					- 绝对路径不会因为文件的位置改变而改变，
 					- 如果在做服务器开发时，尽量都使用绝对路径
 						在做前端开发（网页的开发）时，使用相对路径




 */
















