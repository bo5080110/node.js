var express = require("express");

//express.Router() 会返回一个路由对象，可以将中间件和路由绑定到该对象上
var router = express.Router();

router.get("/hello",function (req , res) {
	res.send("hello");
});

router.get("/nihao",function (req , res) {
	res.send("你好");
});

module.exports = router;

