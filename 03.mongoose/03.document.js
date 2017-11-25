var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{useMongoClient:true});
mongoose.connection.on("open",function () {
	console.log("数据库已经连接");
});

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

var Student = mongoose.model("student",stuSchema);

/*
	Document 代表文档
		- 当我们从数据库中查询出数据时，在node中数据就是以Document对象的形式存在
		- 通过Document来对集合中的文档来做各种操作
		- Document 是 Model的实例
		- 通过Model从数据库中查询到结果实际上也是文档，也是Document对象
 */

//创建Document
var stu = new Student({

	name:"孙悟空",
	age:18,
	gender:"男",
	address:"花果山"

});

//将document插入到数据库中
// doc.save(callback) 将文档插入到数据库中
/*stu.save(function (err) {
	if(!err){
		console.log("文档已经被插入到了数据库中");
	}
});*/


//console.log(stu);

Student.findOne({},function (err , doc) {
	if(!err){
		//console.log(doc instanceof Student);
		//console.log(doc);
		/*
		 	update(doc, options, callback)
		 */
		/*doc.update({$set:{age:20}},function (err) {
			if(!err){
				console.log("修改成功");
			}
		})*/


		//remove([fn]) 删除当前的文档

		/*
			doc.get()
				- 获取文档中的指定属性
				- doc.get("age" , String)
			doc.set(name , value)  doc.set("name","hello");
				- 设置文档的属性
			isInit(path)
				- 属性是否初始化
		 	isNew
		 		- 对象是否是新创建的
		 	id
		 		- 获取文档的id属性
		 	toObject()
		 		- 将Document对象转换为普通的JS对象
		 			转换完成以后，该对象将无法调用Document的方法
		 			save() remove() ...

		 */
		/*console.log(doc.get("age"));
		console.log(doc.get("age" , String));*/

		//doc = doc.toObject();

		//console.log(doc);

		doc.remove(function (err) {
			if(!err){
				console.log("文档已删除~~~");
			}
		});
	}
});
