//在该模块中用于定义Student模型
var mongoose = require("mongoose");

//获取Schema对象
var Schema = mongoose.Schema;

//创建Schema对象
var userSchema = new Schema({
	username:{
		type:String,
		unique:true
	},
	password:String,
	email:String
});

//导出模型
module.exports = mongoose.model("user",userSchema);
