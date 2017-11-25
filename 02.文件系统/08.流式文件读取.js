var fs = require("fs");

/*
	流式文件读取适合一些较大的文件，它可以分多次来将一个文件读出
 */

//创建一个可读流
var rs = fs.createReadStream("笔记.mp3");
//创建一个可写流
var ws = fs.createWriteStream("b.mp3");

//监听流的状态
rs.once("open",function () {
	console.log("可读流已经打开");
});

rs.once("close",function () {
	console.log("可读流已经关闭");

	//全部数据已经读取完毕，关闭可写流
	//ws.end();

});

ws.once("open",function () {
	console.log("可写流打开");
});

ws.once("close",function () {
	console.log("可写流关闭");
});

//读取一个可读流中的内容，需要为可读流绑定一个data事件，这样流会自动通过事件的回调函数来将数据读出
/*
 rs.on("data",function (data) {
 //console.log(data.length / 1024);
 ws.write(data);
 });*/

//pipe()可以将一个可读流中的内容直接输出到可写流中，并且会自动关闭流
rs.pipe(ws);