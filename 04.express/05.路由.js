var express = require("express");
var app = express();

app.use(express.static("public"));

/*
	可以为同一个地址绑定多个路由，
		当该地址被访问时，绑定的多个路由会按照绑定的顺序依次被调用，
		前一个路由可以决定后一个路由是否被调用

		路由的回调函数中还有一个第三个参数 next
			next 是一个函数，如果调用next()函数则会触发到下一个路由

		只要是一次请求，req和res都是相同的
 */


app.get("/hello",function (req , res , next) {

	console.log("我是路由1");

	//res.send("路由1返回的响应信息");

	//触发下一个路由
	next();
});

app.get("/hello",function (req , res , next) {

	console.log("我是路由2");

	//res.send("路由2返回的响应信息");
	next();
});

app.get("/hello",function (req , res) {

	console.log("我是路由3");

	res.send("路由3返回的响应信息");
});


app.get("/abc" , function (req , res , next) {

	console.log(1);

	next();

}, function (req , res , next) {
	console.log(2);

	next();

}, function (req , res , next) {

	console.log(3);

	res.send("Hello abc 3");

});

app.get("/*",function (req , res) {
	res.send("由tom路由返回的内容");
});


app.listen(3000 , function () {
	console.log("ok");
});
