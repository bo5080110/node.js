/*
	在node中，一个js文件就是一个模块，要定义一个模块就是创建一个js文件
		- node中的每一个模块中的代码并不是在全局作用域中执行的，
			每个模块的代码实际上是在一个函数作用域中执行的
			所以模块中定义的所有变量和函数对于外部模块来说都是不可见的

		- 可以将希望暴露的内容，设置为exports对象的属性，
			这样在外部模块中就可以对这些内容进行访问了

	使用require()函数来引入一个外部的模块
		require() 函数中需要一个模块的标识来指定要引入的模块
			对于文件模块（自定义的模块）需要使用文件的路径作为标识
			- 注意路径要么是绝对路径（很少用），要么是以.或..开头的相对路径
			- require()函数会返回一个对象，这个对象代表导入的模块，
				该模块暴露的所有的内容，都会在该对象上
 */

//console.log("这是我的第一个模块");
var hello = require("./01.helloNode");

//console.log(hello.name);

var math = require("./math");

var result = math.mul(123 , 456);

//console.log(result);


/*
 global node中的全局对象，它的作用和window对象类似
 	全局中创建的变量都会作为global的属性保存，全局的函数都会作为global的方法保存
 */
var a = 10;

//console.log(global.a);

//arguments.callee 代表当前正在执行的函数对象
/*
	模块中的代码在执行时，node会自动在代码的最前边添加如下内容
 		function (exports, require, module, __filename, __dirname) {

 	在代码的最后边，添加如下内容
 		}

 	模块在被调用时，会有五个参数传递进来：
 		exports
 			- 是一个对象，通过exports来向外部暴露内容

 		require
 			- 是一个函数，通过require()可以将外部模块引入到当前模块中

 		module
 			- 代表当前整个模块，而exports就是module对象属性
 			- 也可以通过module.exports 来向外暴露内容

 		__filename
 			- C:\Users\lilichao\WebstormProjects\class0816\01.node\02.module.js
 			- 当前模块在系统中的完整路径

 		__dirname
 			- C:\Users\lilichao\WebstormProjects\class0816\01.node
 			- 当前模块所在文件夹的完整路径

 */
//console.log(arguments.callee + "");


//console.log(exports);
//console.log(module.exports === exports);


/*console.log(__filename);

console.log(__dirname);*/


var m1 = require("./03.module");

console.log(m1);


