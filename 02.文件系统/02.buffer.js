/*
	Buffer.from(str , encoding)
		- 将一个字符串转换为一个buffer保存
		- 默认情况下from()会根据utf-8来将字符串转换为buffer

	buf.toString(encoding)
		- 将buffer转换为字符串，默认情况也是使用utf-8
 */
/*
var buf = Buffer.from("Hello 尚硅谷" , "ascii");
var buf2 = Buffer.from("Hello 尚硅谷");

console.log(buf);
console.log(buf2);

console.log(buf.toString("ascii"));*/


/*
	创建指定大小的buffer
	 - Buffer.alloc(size) 创建一个指定大小的buffer
	 - Buffer一旦创建大小就不能修改
	 - Buffer是直接对系统底层的内存进行操作
 */
//var buf = Buffer.alloc(1024*1024);
var buf = Buffer.alloc(10);

//通过索引向buffer中添加元素
buf[0] = 10;
buf[1] = 255;
buf[2] = 300;  //44 101100  300 100101100
buf[10] = 100;

console.log(buf);

/*for(var i=0 ; i<buf.length ; i++){
	console.log(buf[i].toString(2));
}*/

/*
 Buffer.allocUnsafe(size)
 	- 创建一个指定大小的Buffer，但是Buffer中可能包含敏感数据
 */
// var buf2 = Buffer.allocUnsafe(10);
//
// console.log(buf2);