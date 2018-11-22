// nodejs应用组成部分
// require:通过该指令导入其他的nodejs模块，类似于golang中的import
var http = require("http");

// 创建一个服务器，监听端口8080
// request:请求
// response:响应
http.createServer(function (request, response) {
    // 发送HTTP头部
    response.writeHead(200, {'Content-Type':'text/plain'});
    // 发送响应数据"Hello World"
    response.end('Hello World');
}).listen(8080);
// 终端打印
console.log('Server running at http://localhost:8080');