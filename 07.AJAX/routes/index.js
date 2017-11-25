var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/helloAJAX",function (req , res) {

 /* setTimeout(function () {
      res.send("返回响应~~~");
  },10000);*/

  console.log("Hello AJAX已经收到请求~~~");


  res.send("这是helloAJAX返回的响应~~~");

});

router.get("/helloAJAX2",function (req , res) {
  //获取请求参数
  var username = req.query.username;
  var password = req.query.password;

  console.log(username , password);

  res.send("HELLO AJAX2");


});

router.post("/helloAJAX2",function (req , res) {
	//获取请求参数
	var username = req.body.username;
	var password = req.body.password;

	console.log(username , password);

	res.send("HELLO AJAX2 POST");


});

router.get("/helloAJAX3",function (req , res) {

	/*
		name:孙悟空
		age:18
		gender:男
		address:花果山

		一般AJAX响应的数据会有两种格式：
			XML
			JSON

		XML
			- 以XML格式来响应数据
			<student>
				<name>孙悟空</name>
				<age>18</age>
				<gender>男</gender>
				<address>花果山</address>
			</student>

			{
				"name":"孙悟空",
				"age":18,
				"gender":"男",
				"address":"花果山"
			}
	 */

	//设置一个响应头，来说明响应数据类型
	res.set("content-type","application/xml");

	res.send("<student><name>孙悟空</name><age>18</age><gender>男</gender><address>花果山</address></student>");

});

router.get("/helloAJAX4",function (req , res) {

	//创建一个对象
	var obj = {
		name:"孙悟空",
		age:18,
		gender:"男",
		address:"花果山"
	}


	//将这个对象以json的形式发送给客户端
	//JSON.stringify()
	//JSON.parse()
	//如果直接将一个js对象作为响应体发送，Express会自动将对象转换为JSON发送
	res.send(obj);


});

router.get("/helloAJAX5",function (req , res) {
	console.log("helloAJAX5 收到请求");

	var callback = req.query.callback;

	var obj = {
		name:"孙悟空",
		age:18,
		gender:"男",
		address:"花果山"
	};

	//设置一个响应头，允许跨域请求
	//res.set("Access-Control-Allow-Origin","http://127.0.0.1:3000");
	res.set("Access-Control-Allow-Origin","*");

	//fn([Object object])
	//fn({name:..,age..,gender:..})
	//res.send(callback+"("+JSON.stringify(obj)+")");
	res.send(obj);
});

module.exports = router;
