// 表单管理
var http = require('http');
var querystring = require('querystring');
var url = require('url')

var postHTML='<html> <head><meta charset="utf-8"><title>POST实例</title> </head>' +
    '<body>' +
    '<form method="post">' +
    '网站名：<input name="name"><br>' +
    '网站URL：<input name="url"><br>' +
    '<input type="submit">' +
    '</form>'+
    '</body>'+
    '</html>'

http.createServer(function (req, res) {
    var body = ""
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        // 解析参数
        body = querystring.parse(body);
        var params = url.parse(req.url, true).query;
        res.writeHead(200, {'Content-Type':'text/heml; charset=utf8'});
        // 输出提交的数据
        console.log("name : ", params.name);
        console.log("url : ", params.url);
        if (params.name && params.url) {
            res.write("网站名：" + params.name);
            res.write("<br>");
            res.write("网站URL：" + params.url);
        } else {
            res.write(postHTML);
        }
        res.end();
    });
}).listen(9090);
