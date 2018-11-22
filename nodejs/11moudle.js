// 常用模块介绍

// util
var util = require('util');
// util.debug("test")

// 格式化
var v1 = 'test';
var v2 = 1024
console.log(util.format("%s is %d", v1, v2))
// 数据类型验证
console.log(util.isDate(new Date()));

// path
var path = require("path");
// 格式化路径
console.log(path.normalize('/test/test//test/tag/..'))
// 连接路径
console.log(path.join('/test','test1'))
// 转换为绝对路径
console.log(path.resolve("11module.js"))
// 路径中文件后缀名
console.log(path.extname("11module.js"))
