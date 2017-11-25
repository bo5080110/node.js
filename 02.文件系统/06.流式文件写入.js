var fs = require("fs");

/*
	流失文件写入，适合于较大的文件，它可以分多次持续的向一个文件中写入内容
 */
//创建一个可写流
var ws = fs.createWriteStream("hello3.txt");

//可以监听流的状态
ws.once("open",function () {
	console.log("流已经打开~~~");
});

ws.once("close",function () {
	console.log("流已经关闭~~~");
});

//通过可写流向文件中写入内容
ws.write("我是通过可写流写入的内容~~~");
ws.write("内容1~~~");
ws.write("内容2~~~");
ws.write("内容3~~~");
ws.write("内容4~~~");

//关闭流
//ws.end()用来将流中的内容输出并关闭流
ws.end();