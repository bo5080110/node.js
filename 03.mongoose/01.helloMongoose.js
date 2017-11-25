/*
	mongoose的使用步骤：
		1.下载安装mongoose
			npm i mongoose --save
		2.在项目中引入mongoose
			var mongoose = require("mongoose");
		3.连接MongoDB数据库
 			mongoose.connect("mongodb://ip地址:端口号/数据库的名字",{useMongoClient:true});

 */
//引入mongoose
var mongoose = require("mongoose");

//连接MongoDB数据库
mongoose.connect("mongodb://127.0.0.1:27017/mongoose_test",{useMongoClient:true});

//监听数据库的状态
//mongoose.connection 表示当前的数据库连接
mongoose.connection.on("open",function () {
	console.log("数据库已经成功连接");
});

mongoose.connection.on("close",function () {
	console.log("数据库已经关闭");
});

//断开数据库连接 ，一般情况下该方法不会调用
//mongoose.disconnect();

/*
	创建Schema
		- Schema模式对象，通过Schema可以对集合中的文档进行约束，
			Schema可以定义出文档中具有哪些字段以及字段的类型
 */

//获取Schema构造函数
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

/*
	Model(模型)
		- Model和数据库中的集合一一对应，通过Model可以对集合以及集合中的文档做各种操作
		- Model也是一个构造函数，它可以用来创建Document
		- 通过 mongoose.model(); 来创建一个模型
			需要两个参数：
				1.映射的集合的名字，注意集合名，mongoose会自动变成复数
				2.对其进行约束模式对象
 */

var Student = mongoose.model("student",stuSchema);

/*
	通过Model来对数据库进行操作
 	Model.create()可以用来经一个文档插入到数据库中
 */
/*Student.create({
	name:"孙悟空",
	age:18,
	gender:"男",
	address:"火锅山"
},function (err) {
	if(!err){
		console.log("插入成功~~~");
	}
});*/

Student.create({
	name:"白骨精",
	age:18,
	address:"白骨洞"
},function (err) {
	if(!err){
		console.log("插入成功~~~");
	}
});


