var obj = {};

obj.a = {
	name:"孙悟空"
};

var a = obj.a;

a.name = "猪八戒";

a = {name:"沙和尚"};

/*console.log(a.name);
console.log(obj.a.name);*/

/*
	exports 和 module.exports 指向的是同一个对象
		修改exports实际上就是为修改module.exports

	当向外部暴露内容时，module.exports  可以直接赋值
			而 exports 只能通过 . 的形式添加，不能直接赋值
 */

/*exports.a = 10;
module.exports.b = 20;*/

exports = {
	a : 30,
	b : 40
};

var fs = require("fs");

//console.log(fs);
