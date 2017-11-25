var fs = require("fs");

/*
 fs.existsSync(path)
 	- 检查一个文件是否存在，存在返回true， 否则返回false
 */

var flag = fs.existsSync("ab.jpg");

/*
 fs.stat(path, callback)
 fs.statSync(path)
 	- 获取文件的状态
 		- 是否是文件、大小、创建日期
 */
fs.stat("a.mp3",function (err,stats) {
	if(!err){
		//回调函数会返回一个stats对象，该对象表示当前文件相关信息
		/*
			size 文件的大小
			 isFile() 是否是文件
			 isDirectory() 是否是目录

		 */
		//console.log(stats.isDirectory());
	}
});

/*
 fs.readdir(path[, options], callback)
 fs.readdirSync(path[, options])
 	- 读取一个文件夹的目录结构
 */
fs.readdir(".",function (err , files) {
	//files是一个字符串数组，里边保存了当前文件夹下所有文件名字字符床
	if(!err){
		//console.log(files[3]);
	}
});

/*
 fs.mkdir(path[, mode], callback)
 fs.mkdirSync(path[, mode])
 	- 创建一个目录
 */
//fs.mkdirSync("hello");

/*
 fs.rmdir(path, callback)
 fs.rmdirSync(path)
 	- 删除一个文件夹（空文件夹）
 */

//fs.rmdirSync("abc");

/*
 fs.unlink(path, callback)
 fs.unlinkSync(path)
 	- 删除一个文件
 */
//fs.unlink("hello2.txt");

/*
 fs.rename(oldPath, newPath, callback)
 fs.renameSync(oldPath, newPath)
 	- 为一个文件进行重命名，通过该方法也可以实现一个剪切的功能
 */
//fs.renameSync("biji.mp3","C:\\Users\\lilichao\\Desktop\\module\\笔记.mp3");


/*
 fs.watchFile(filename[, options], listener)
 	- 该方法用来监听一个文件的改变
 
 */
/*
fs.watchFile("hello3.txt",{interval:1000},function (curr , prev) {
	//console.log("hello3.txt发生变化了~~~");
	console.log("当前文件大小："+curr.size);
	console.log("修改前文件大小："+prev.size);
});*/


/*
 fs.truncate(path[, len], callback)
 fs.truncateSync(path[, len])
 	- 截断文件
 	- 通过该方法可以改变文件的大小
 */
fs.truncateSync("hello3.txt",10);