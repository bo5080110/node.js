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
	Model的方法
 		Model.create(doc(s), [callback])
 			- 将一个或一组文档添加到数据中





 */

/*
Student.create([
	{
		name:"猪八戒",
		age:28,
		gender:"男",
		address:"高老庄"
	},{
		name:"沙和尚",
		age:38,
		gender:"男",
		address:"流沙河"
	},{
		name:"唐僧",
		age:16,
		gender:"男",
		address:"女儿国"
	}

],function (err) {
	if(!err){
		console.log("插入成功~~");
	}
});*/


/*
 Model.find(conditions, [projection], [options], [callback])
 	- 查询所有符合条件的文档，返回一个数组
 Model.findOne([conditions], [projection], [options], [callback])
 	- 查询符合条件的第一个文档，返回一个document（文档对象）
 Model.findById(id, [projection], [options], [callback])
 	- 根据id属性查询文档，返回一个对象

 Model.count(conditions, [callback])
 	- 统计符合条件的文档的数量

 参数：
	 conditions 查询条件
	 projection 投影  {name:1,age:1,_id:0}  "name gender -_id"
	 options 配置对象  {limit:2,skip:1,sort:{age:-1}}  {limit:2,skip:0,sort:"-age"}
	 callback 回调函数
 */

/*Student.find({age:{$gt:20}},"name gender -_id",function (err , docs) {

	if(!err){
		console.log(docs);
	}

});*/

/*Student.find({},null,{limit:2,skip:0,sort:"-age"},function (err , docs) {

	if(!err){
		console.log(docs);
	}

});*/

/*Student.findOne({name:"孙悟空"},function (err , doc) {
	if(!err){
		console.log(doc);
	}
});*/

/*Student.findById("5a012abab2bd701b44aa42cf",function (err , doc) {
	console.log(doc);
});*/

/*Student.count({age:{$lt:20}},function (err , count) {
	if(!err){
		console.log(count);
	}
})*/


/*
 Model.update(conditions, doc, [options], [callback])
 	- 修改（替换）一个或多个文档
 Model.updateMany(conditions, doc, [options], [callback])
 	- 修改多个文档
 Model.updateOne(conditions, doc, [options], [callback])
 	- 修改一个文档
 Model.replaceOne(conditions, doc, [options], [callback])
 	- 替换一个文档

 	参数：
 		conditions 查询条件
 		doc 新的对象
 		options 配置对象
 		callback 回调函数

 */

/*
Student.update({name:"孙悟空"},{$set:{address:"花果山"}},function (err) {
	if(!err){
		console.log("修改成功~~~");
	}
});*/

/*
 Model.remove(conditions, [callback])
 	- 删除多个文档
 Model.deleteMany(conditions, [callback])
 	- 删除多个文档
 Model.deleteOne(conditions, [callback])
 	- 删除一个文档
 */

Student.remove({age:16},function (err) {
	if(!err){
		console.log("删除成功");
	}
});
