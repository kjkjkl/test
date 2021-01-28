//1.引入express
const express = require('express');
//2.创建应用对象
const app = express();
//3.创建路由规则
//request是对请求报文的封装
//responson是对响应报文的封装
app.get('/server', (request, response)=>{
	//设置响应头 设置允许跨域
	response.setHeader('Access-Control-Allow-Origin','*');
	//设置响应体
	response.send('Hellow Ajax Test by kjkjkl');
});

app.all('/json-server', (request, response)=>{
	//设置响应头 设置允许跨域
	response.setHeader('Access-Control-Allow-Origin','*');
	response.setHeader('Access-Control-Allow-Headers','*');
	//响应一个数据
	const data = {
		name: 'kjkjkl',
		age: '18'
	};
	//将该数据进行JSON转换
	let str = JSON.stringify(data);
	//设置响应体
	response.send(str);
});


//IE缓存问题
app.get('/ie', (request, response)=>{
	//设置响应头 设置允许跨域
	response.setHeader('Access-Control-Allow-Origin','*');
	//设置响应体
	response.send('Hello IE -4');
});

//请求超时与网络问题
app.get('/delay', (request, response)=>{
	//设置响应头 设置允许跨域
	response.setHeader('Access-Control-Allow-Origin','*');
	setTimeout(() => {
		
		response.send('网络超时请求测试');
	},3000)
	//设置响应体
});

//jQuery服务
app.all('/jquery-server', (request, response)=>{
	//设置响应头 设置允许跨域
	response.setHeader('Access-Control-Allow-Origin','*');
	response.setHeader('Access-Control-Allow-Headers','*');
	const data = {name: 'kjkjkl'};
	//设置响应体
	//response.send('Hello jQuery');
	response.send(JSON.stringify(data));
});

//axios服务
app.all('/axios-server', (request, response)=>{
	//设置响应头 设置允许跨域
	response.setHeader('Access-Control-Allow-Origin','*');
	response.setHeader('Access-Control-Allow-Headers','*');
	const data = {name: 'kjkjkl'};
	//设置响应体
	//response.send('Hello jQuery');
	response.send(JSON.stringify(data));
});
//4.监听端口启动服务
app.listen(8000, ()=>{
	console.log("服务已启动，8000端口监听中...");
})