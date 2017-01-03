var express=require('express');
var app=express();
//设置express的默认路径，默认路径为项目路径
app.use(express.static('public'));
//设置跨域访问
app.all('*',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	next();
})
//发送客户端get数据
app.get('/list1',function(req,res){
	res.sendFile(__dirname+'/1.json')
})
app.get('/list2',function(req,res){
	res.sendFile(__dirname+'/2.json')
})
app.get('/list3',function(req,res){
	res.sendFile(__dirname+'/3.json')
})

var server=app.listen('3000',function(){
	console.log("服务已启动")
})