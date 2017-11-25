var fs = require("fs");
/*
	异步的文件写入
	 1.打开文件
 		fs.open(path, flags[, mode], callback)
 			- 用来打开文件
 			- callback
 				- 回调函数，当打开文件执行完毕时，会调用回调函数，
 					并以参数的形式将结果返回
 				- 参数：
 					err
 						- 错误对象，如果执行时发生错误，则会创建一个err对象并设置为一个参数返回，
 							如果没有错误，则err对象为null
 						- 错误优先
 					fd

	 2.向文件中写入内容
 		fs.write(fd, string[, position[, encoding]], callback)

	 3.关闭文件
		fs.close(fd, callback)
 */

 
 //打开文件
fs.open("hello.txt","w",function (err , fd) {
	 if(!err){
	 	//如果没有出错，打印fd
	 	//console.log("回调函数执行");
		fs.write(fd , "通过异步方法写入的内容" , function (err) {
			if(!err){
				console.log("写入成功~~~");
			}
			//关闭文件
			fs.close(fd , function (err) {
				if(!err){
					console.log("文件已关闭~~~");
				}
			})

		});

	 }

	//console.log(arguments);
});


