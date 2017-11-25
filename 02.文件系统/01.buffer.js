/*
Buffer 缓冲区
	- Buffer是Node中新添加的一个对象，使用Buffer不需要引入，可以直接使用
	- Buffer的功能和数组类似，但是数组Array对于二进制的支持不好，所以创建了Buffer专门用来存储二进制数据
	- 打印一个buffer时，数据是以十六进制的形式的显示
	- Buffer中的每一个元素的大小限制在00 - ff ， buffer中的一个元素的大小就是一个字节
		- 00000000 - 11111111
		- 1 bit（位）
		- 1 byte(字节) = 8 位
		- 1 kb = 1024 b
		- 1 mb = 1024 kb
		- 1 gb = 1024 mb
		- 1 tb = 1024 gb
		...

 */

//创建一个Buffer
//将字符串Hello World保存到一个Buffer中
var buf = Buffer.from("Hello 尚硅谷");

console.log(buf);
//buf.length 获取到的是字符串占用内存的大小
//console.log(buf.length);

//console.log("Hello 尚硅谷".length);

//toString()可以将一个buffer转换为字符串
console.log(buf.toString());