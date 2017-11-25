/*
	定义一个模块 math.js
		- 要求该模块向外部暴露两个方法:
			add(a , b) 求两个数的和
			mul(a , b) 求两个数的积
 */
exports.add = function (a , b) {
	return a+b;
};

exports.mul = function (a , b) {
	return a*b;
};