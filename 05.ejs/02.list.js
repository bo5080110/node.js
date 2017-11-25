var express = require("express");
var app = express();

app.set("view engine" , "ejs");
app.set("views" , "views");


app.get("/list" , function (req , res) {

	/*
		从数据库中获取一组数据，然后将数据以变量的形式传递到模板中，
			并且在模板中渲染呈现给用户
	 */
	//从数据库中获取数据
	var arr = [
		{name:"孙悟空",age:18,gender:"男",address:"花果山"},
		{name:"猪八戒",age:28,gender:"男",address:"高老庄"},
		{name:"二郎神",age:48,gender:"男",address:"二郎庙"},
		{name:"白骨精",age:16,gender:"女",address:"白骨洞"},
		{name:"蜘蛛精",age:18,gender:"女",address:"盘丝洞"},
		{name:"奔波霸",age:58,gender:"男",address:"碧波潭"},
		{name:"铁扇公主",age:46,gender:"女",address:"芭蕉洞"}
	];

	//渲染模板，并将数据发送过去
	res.render("list",{list:arr});


});



app.listen(3000 , function () {
	console.log("ok");
});