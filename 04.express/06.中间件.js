var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//处理静态资源的中间件
app.use(express.static("public"));

//使用bodyParser中间件
app.use(bodyParser.urlencoded({extended:false}));

/*
	使用body-parse来使express支持解析请求体
		1.下载安装body-parser
			npm i body-parser --save
		2.引入body-parser
 			var bodyParser = require("body-parser");
 		3.将其设置为express的中间件
 			app.use(bodyParser.urlencoded({extended:false}));

 */

/*
	中间件
		- Express就是一个单纯的WEB服务器，默认情况下只能实现最最简单的服务器的功能
			我们可以通过中间件来对服务器进行功能的扩展
		- 中间件和路由非常非常类似。
		- 通过app.use()来设置中间件，用法和get()一摸一样
			不同的是中间件默认情况会过滤多个请求，而且中间件的路径可以省略不写
		- 中间件可以在请求到达路由之前，做一些准备工作：
			比如：解析请求体、解析Cookie、解析Session 。。。。

		- 静态资源中间件的原理：
			一般情况静态资源的中间件都会写在所有的路由的前边,
			这样所有请求进来时都会先经过静态资源中间件
			在中间件中会先检查请求是否是一个静态资源，如果是则直接返回静态资源
			如果不是，则会在中间件中调用 next()交由其他中间件或路由处理
 */
/*app.use(function (req , res) {
	console.log(123);
	res.send("Hello 我是一个中间件");
});*/

app.get("/hello",function (req , res) {
	res.send("Hello");
});

app.post("/testPost",function (req , res) {

	console.log("post路由收到请求");

	//req.body 用来获取请求体中的请求参数
	//默认情况下express不会解析请求体，所以req.body是undefined
	//这时我们需要引入一个中间件，使express可以解析请求体
	console.log(req.body.username , req.body.password);



	res.send("这是一个post请求的响应信息~~~~");
});






app.listen(3000 , function () {
	console.log("ok");
});
