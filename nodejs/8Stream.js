// 从流中读取数据
var fs = require("fs");
var data = ''
// 创建可读流
var readerStream = fs.createReadStream('input.txt');
// 设置编码
// readerStream.setEncoding('UTF8');
// // 处理流事件
// readerStream.on('data', function (chunk) {
//     data += chunk;
// })
//
// readerStream.on('end', function () {
//     console.log(data);
// })


// 写入流
var data1 = 'the forth';
// 创建一个可写入的流，写入到output.txt中
var writeStream = fs.createWriteStream('output.txt');
// // 编码数据
// writeStream.write(data1, 'UTF8');
// // 标记文件末尾
// writeStream.end();
// // 处理流
// writeStream.on('finish', function () {
//     console.log("写入完成")
// })


// 管道流
    // 管道流主要提供一个输入输出流机制(输出->输入流中)
// 管道读写操作
readerStream.pipe(writeStream);
console.log("程序执行完毕");