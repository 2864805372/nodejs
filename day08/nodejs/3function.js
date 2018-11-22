// nodejs 函数
// 函数作为参数传递
function say(word) {
    console.log(word)
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "hello");

execute(function (word) {
    console.log(word)
}, "hello");

// 使用=>定义函数
// 定义名为f的函数，参数为v,返回值也为v
var f = v => v;
// 上面的代码相当于
// var f = function f(v) {
//     return v;
// }
console.log(f(2))

// 无参箭头函数
var f1 = () => 5;
var f1 = function() {
    return 5
}
console.log(f1())

// 有参数的箭头函数运算
// 求和
var sum = (a, b) => a + b;
// 换一种写法
var sum = (a,b) = > {return a + b;}
console.log(sum(3,4));