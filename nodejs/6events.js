// 事件管理

// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter();
// // 绑定事件函数
// event.on('some_event', function () {
//     console.log('some event 事件触发');
// });
//
// setTimeout(function () {
//     event.emit('some_event');
// },1000);

var events = require("events");
var emitter = new events.EventEmitter();
// on:为指定的事件，注册一个监听器，接收一个字符串作为事件名称，
// 还接收一个回调函数
emitter.on('some_event', function (arg1, arg2) {
    console.log('listener1 事件触发', arg1, arg2);
});
emitter.on('some_event', function (arg1, arg2) {
    console.log('listener2 事件触发', arg1, arg2);
});
emitter.emit('some_event', 'arg1参数', 'arg2参数');

// addListener(event,listener)
// removeLister(event,Listener)
