const express = require("express");
require("./tools/mongo")
const CityModel = require("./models/city");
const app = express();
app.use(express.static("public"));


//创建路由，用来加载省市县的信息
//获取省的信息
app.get("/getSheng",function (req , res) {

	//db.cities.find({level:1});
	//调用CityModel来加载所有的省份的信息
	CityModel.find({level:1},function (err , list) {

		if(err){
			//如果出错了
			res.send({status:"error"});
		}else{
			//没出错获取到了数据
			res.send({status:"ok" , list:list});
		}

	});

});

//获取城市的新
app.get("/getDi",function (req , res) {
	//db.cities.find({level:2,sheng:"15"});
	//获取省份的id
	var sheng = req.query.sheng;
	//调用CityModel来加载当前省份的城市信息
	CityModel.find({level:2 , sheng:sheng},function (err , list) {

		if(err){
			//如果出错了
			res.send({status:"error"});
		}else{
			//没出错获取到了数据
			res.send({status:"ok" , list:list});
		}

	});


});

//获取区县
app.get("/getXian",function (req , res) {
	//db.cities.find({level:3,sheng:"13",di:"01"});

	//获取省的id
	var sheng = req.query.sheng;
	//获取城市的id
	var di = req.query.di;

	CityModel.find({level:3 , sheng:sheng , di:di},function (err , list) {

		if(err){
			//如果出错了
			res.send({status:"error"});
		}else{
			//没出错获取到了数据
			res.send({status:"ok" , list:list});
		}

	});


});




app.listen(3000);