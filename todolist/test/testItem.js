require("../tools/db");
var Item = require("../models/item");


Item.create({
	title:"吃西瓜",
	userId:"5a065da7c30c7e10d4c3f255"
},function (err) {
	if(!err){
		console.log("插入成功");
	}
});