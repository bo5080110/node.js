/*
fs (file system)
	- 文件系统
	- node通过fs模块来对系统中的文件进行各种操作
	- 使用fs模块不需要下载，直接引入即可
	- fs模块中的所有的方法，都提供了两个版本
		异步方法
			- 异步方法不会阻塞其他的程序执行，它会在后台执行各种操作，
				操作完成后通过回调函数将结果返回

		同步方法（带Sync后缀）
			- 同步方法会阻塞其他的程序的执行，操作没有完成，则不能向下进行
 */
var fs = require("fs");

/*
	通过fs模块，来向文件中写入内容
		- 手动的操作步骤：
			1.打开文件
			2.写入内容并保存
			3.关闭文件

		- 程序的步骤：
			1.打开文件
 				fs.openSync(path, flags[, mode])
 					- 作用：
 						用来打开文件
 					- 参数：
 						path 要操作的文件的路径
 						flags 打开文件要做的操作类型
 							常用值 "r" "w" "a"
 						mode 设置文件的权限，主要用于linux，在windows没什么用，
 								一般不传
 					- 返回值
 						fd 文件的描述符

			2.写入内容
 				fs.writeSync(fd, string[, position[, encoding]])
 				- 作用：
 					用于向文件中写入内容
 				- 参数：
 					fd 文件的描述符
 					string 向文件中写入的内容
 					position 写入的起始位置
 					encoding 写入的编码，默认utf-8

			3.关闭文件
 				fs.closeSync(fd)
 				- 作用：
 					- 用来将文件关闭（从内存中移除）
 */
//打开hello.txt
var fd = fs.openSync("hello.txt" , "w");

//写入内容
fs.writeSync(fd,"O(∩_∩)O哈哈~");

//关闭文件
fs.closeSync(fd);


