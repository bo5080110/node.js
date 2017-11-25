//在该模块中用于定义Student模型
var mongoose = require("mongoose");

//获取Schema对象
var Schema = mongoose.Schema;

//创建Schema对象
var stuSchema = new Schema({

	name:String,
	age:Number,
	gender:{
		type:String,
		default:"女"
	},
	address:String

});

//创建模型
module.exports= mongoose.model("student",stuSchema);
