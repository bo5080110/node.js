//引入通过npm下载的包
/*
	包的搜索的流程
		- 当我们通过require()引入一个npm中的包时，
			node会首先去当前文件所在的文件夹下的node_modules下去寻找指定的包
				如果找到了，则正常引入。
				如果没有找到，则去上一级目录的node_modules中寻找，
				找到了则引入。
				如果没有找到，则继续去上一级的上一级目录的node_modules中寻找
				找到了则引入。
				依此类推，直到找到了磁盘的根目录，如果依然没有找到则报错

 */
var math = require("math");

var result = math.add(123 , 456);

console.log(result);