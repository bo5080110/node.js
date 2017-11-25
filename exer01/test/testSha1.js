/*
	SHA1是一个加密算法
		- 使用步骤：
			1.下载安装sha1模块
				npm i sha1 --save
			2.引入sha1
				var sha1 = require("sha1");
 */
var sha1 = require("sha1");

var str = "123123";

var str2 = sha1(sha1(sha1(str)));

console.log("加密前:"+str);
console.log("加密后:"+str2);