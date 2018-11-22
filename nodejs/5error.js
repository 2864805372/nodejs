// 异常处理

// 同步代码块内出现异常
let syncError = () => {
    throw new Error('Sync Error');
}
// 异步代码块内出现异常
let asyncError = () => {
    setTimeout(function () {
        throw new Error('Async Error')
    },100);
}

// 1. try cathc
try {
    syncError();
}catch (e) {
    /*处理异常*/
    console.log(e.message)
}
console.log('异常捕获成功');

// 2. call back
// var fs = require('fs');
// fs.mkdir('/dir', function (e) {
//     if (e) {
//         console.log(e.message);
//     }else {
//         console.log("创建目录成功")
//     }
// })

// 3. event方式
let events = require('6events');
// 创建事件监听对象
let emitter = new events.EventEmitter();
// 监听error
emitter.addListener("error", function (e) {
    console.log(e.message);
});
emitter.emit("error", new Error("出错"))

// 4. promise
new Promise((resolve, reject)=>{
    asyncError();
}).then(()=>{

}).catch((e)=>{
    console.log(e.message)
})

// 5. process
process.on("uncaughtEx", function (e) {
    console.log(e.message)
})

// 6. domain
let domain = require("domain")
let d = domain.create()
d.on('error', function (e) {
    console.log(e.message);
})
d.run(asyncError);
d.run(syncError);