require("./tools/db");
var Student = require("./models/student");


Student.create({
	name:"孙悟空",
	age:18,
	gender:"男",
	address:"花果山"
},function (err) {
	if(!err){
		console.log("插入成功~~~");
	}
});