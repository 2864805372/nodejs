// 回调函数

// 文件I/O处理,
// 1. 阻塞代码
var fs = require("fs");
//
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("程序执行结束");

// 2. 非阻塞代码，不会等待文件读取完成之后再执行后面的代码
fs.readFile('input.txt',function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("程序执行结束")