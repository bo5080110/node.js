var fs = require("fs");


/*
 fs.writeFile(file, data[, options], callback)
 fs.writeFileSync(file, data[, options])
 	- 参数：
 		file 要操作的文件的路径
 		data 要写入文件的数据（可以是String 或 Buffer）
 		options 配置对象
 			{
			 encoding :xx, 指定编码，默认utf8
			 mode :xx, 指定文件的权限，默认 666
			 flag : xx 要对文件做的操作的类型，默认 w
 			}
 		callback 回调函数，操作完成以后会调用该回调函数
 			参数：
 				err

 */

/*
fs.writeFile("hello2.txt","今天天气真不错，一点也不冷",function (err) {
	if(!err){
		console.log("写入成功~~");
	}
});*/

//C:\Users\lilichao\Desktop\hello.txt
//C:\\Users\\lilichao\\Desktop\\hello.txt
/*
fs.writeFile("C:/Users/lilichao/Desktop/hello.txt","今天天气真不错，一点也不冷",function (err) {
	if(!err){
		console.log("写入成功~~");
	}
});*/

fs.writeFile("hello2.txt","今天天气真不错，一点也不冷",{encoding:"utf-8",flag:"r"},function (err) {
	if(!err){
		console.log("写入成功~~");
	}else{
		console.log(err);
	}
});
