// 全局对象

// __filename:表示当前正在执行的脚本的文件名
console.log("filename:",__filename);
// __dirname:表示当前脚本所在的目录
console.log("dirname:",__dirname);
//
var t = setTimeout(function () {
    console.log("hello");
},100);
clearTimeout(t)