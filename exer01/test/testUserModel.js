//连接数据库
require("../tools/db");
//获取UserModel
var User = require("../models/user");


User.create({
	username:"admin",
	password:"123123",
	email:"ad@ad.com"
},function (err) {
	if(!err){
		console.log("注册成功~~~");
	}else{
		console.log(err);
	}
});