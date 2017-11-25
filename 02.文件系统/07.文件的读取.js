var fs = require("fs");


/*
	1.同步读取
	2.异步读取
	3.简单读取
	 fs.readFile(path[, options], callback)
	 fs.readFileSync(path[, options])
	 	- 参数：
	 		path 要读取的文件的路径
	 		options 配置对象
	 		callback 回调函数，读取完成后调用，两个参数：
	 			err 错误对象
	 			data 读取到的数据 / 默认情况下会返回buffer
	 					如果读取时指定了encoding，则会返回字符串
	4.流式读取
 */

fs.readFile("an.jpg",function (err , data) {
	if(!err){
		//console.log(data);
		//将读取到的数据输出
		fs.writeFile("a.jpg",data,function (err) {
			if(!err){
				console.log("写入成功~~");
			}
		});
	}
});