var express = require("express");
var router = express.Router();

//引入UserModel
var User = require("../models/user");

//引入ItemModel
var Item = require("../models/item");

//引入sha1
var sha1 = require("sha1");

//映射登录页面的ejs
router.get("/login",function (req , res) {

	res.render("login");
});

//映射注册页面的ejs
router.get("/register",function (req , res) {
	res.render("register");
});

//为根目录来映射路由
router.get("/",function (req , res) {

	if(req.session.loginUser){
		//登录，跳转到item_list
		res.redirect("/item_list");
	}else{
		//没有登录，跳转到登录页
		res.redirect("/login");
	}

});

//创建一个路由，用来检查用户名是否存在
router.get("/checkUsername",function (req , res) {

	//获取要验证的用户名
	var username = req.query.username;

	//调用UserModel验证用户名是否存在
	User.findOne({username:username},function (err , user) {
		if(!err && user){
			//用户名已存在，不可用
			res.send({status:"error"});
		}else{
			//用户名可用
			res.send({status:"ok"});
		}
	});

});


//创建一个函数检查用户是否登录
function checkLogin (req , res , next) {
	if(req.session.loginUser){
		next();
	}else{
		//用户没有登录，跳转到登录页面
		res.render("login",{msg:{err:"请登录后在访问该页面"}});
	}

}

//映射待办事项列表的ejs
router.get("/item_list", checkLogin , function (req , res) {
	//获取当前用户的id
	var userId = req.session.loginUser._id;

	//获取当前用户的所有的待办事项
	Item.find({userId:userId , state:{$ne:0}},function (err , items) {
		//console.log(items);
		res.render("item_list" , {items:items});

	});



});

//创建一个路由，用来修改待办事项的标题
router.post("/updateTitle", checkLogin , function (req , res) {
	//获取要修改的待办事项的id
	var itemId = req.body.itemId;

	//获取要修改的新的标题
	var title = req.body.title;

	//获取当前用户的id
	var userId = req.session.loginUser._id;

	//调用Model来修改待办事项
	Item.updateOne({_id:itemId , userId:userId},{$set:{title:title , state:1}},function (err) {
		//返回到item_list
		res.redirect("/item_list");
	});
})

//创建一个路由，用来修改待办事项
router.get("/updateState", checkLogin ,function (req , res) {

	//获取要修改的待办事项的id
	var itemId = req.query.itemId;

	//获取要修改成的状态
	var state = req.query.state;

	//获取当前用户的id
	var userId = req.session.loginUser._id;

	//调用Model来修改待办事项
	Item.updateOne({_id:itemId , userId:userId},{$set:{state:state}},function (err) {
		//返回到item_list
		res.redirect("/item_list");
	});

});


//创建一个路由，用来处理添加待办事项
router.post("/addItem",checkLogin,function (req , res) {

	//获取用户填写的title
	var title = req.body.title;

	//获取当前用户的id
	var userId = req.session.loginUser._id;

	//将待办事项插入进数据库
	Item.create({
		title:title,
		userId:userId
	},function (err) {

		//返回到item_list
		res.redirect("/item_list");

	});

});


//创建一个路由，用来处理用户的登出的功能
router.get("/logout",function (req , res) {

	//将loginUser从session中删除
	//delete req.session.loginUser;

	//将session对象直接销毁
	req.session.destroy();

	//返回登录页面
	res.redirect("/login");


});


//创建一个路由，处理用户的登录
router.post("/login",function (req , res) {


	/*
		使用户第二次登录时，不需要输入用户名，直接输入密码即可登录
	 */

	//获取用户输入的用户名和密码
	var username = req.body.username.trim();
	var password = req.body.password.trim();

	//去数据库中验证用户名是否合法
	User.findOne({username:username} , function (err , user) {

		if(!err && user && user.password == sha1(password)){

			//用户登录成功，将用户名设置为cookie，发送给浏览器
			res.cookie("username",username,{maxAge:1000*60*60*24*7});

			//当用户登录成功以后，向session中添加一个属性，通过该属性可以标识用户是否登录
			//一般会在用户登录成功以后，将表示用户信息的对象放入到session
			req.session.loginUser = user;

			//登录成功，跳转到item_list
			res.redirect("/item_list");

		}else{
			//登录失败，返回登录页面，并显示错误消息
			res.render("login",{msg:{err:"用户名或密码错误"}});
		}


	});

});

//创建一个路由，用来处理用户的注册
router.post("/register" , function (req , res) {

	//获取用户填写的信息 用户名 密码 确认密码 电子邮件
	var username = req.body.username.trim();
	var password = req.body.password.trim();
	var repwd = req.body.repwd.trim();
	var email = req.body.email.trim();

	//验证用户的信息是否合法
	//创建三个正则表达式用来验证用户名 密码 和 电子邮件
	var nameReg = /^[a-z0-9_-]{3,16}$/i ;
	var pwdReg = /^[a-z0-9_-]{6,18}$/i ;
	var emailReg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i ;

	//创建一个对象，用来保存错误消息
	var msg = {};

	//将用户名和密码设置到msg对象中
	msg.username = username;
	msg.email = email;

	//验证用户名是否合法
	if(!nameReg.test(username)){
		//用户名不符合规范
		msg.umErr = "请输入3-16位，可以包含字母、数字、_、-的用户名" ;
	}

	//验证密码
	if(!pwdReg.test(password)){
		//密码不符合规范
		msg.pwdErr = "请输入6-18位，可以包含字母、数字、_、-的密码";
	}

	//验证确认密码
	if(password != repwd){
		//两次输入的密码不一致
		msg.rpErr = "两次输入的密码不一致";
	}

	//验证电子邮件
	if(!emailReg.test(email)){
		//电子邮件格式不正确
		msg.emailErr = "请输入正确的电子邮箱的地址";
	}


	//判断四个验证是否通过
	if(msg.umErr || msg.pwdErr || msg.rpErr || msg.emailErr){

		//返回到注册页面，并显示错误消息
		res.render("register", {msg:msg});

		return;
	}


	//信息的格式正确，将用户数据插入进数据库
	//调用模型将用户信息插入到数据库中
	User.create({
		username:username,
		password:sha1(password),
		email:email
	},function (err) {
		if(!err){
			//注册成功，跳转到登录页面
			res.redirect("/login");
		}else{
			//注册失败，用户名已存在，回到注册页面
			//res.redirect("/register");
			msg.err = "用户名已存在";
			res.render("register",{msg:msg});

		}
	});



});



module.exports = router;
