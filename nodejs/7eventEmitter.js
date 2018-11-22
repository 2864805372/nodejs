var event = require('events')
var eventEmitter = new event.EventEmitter()

// 监听器1
var listener1 = function listener1() {
    console.log('监听器listener1执行')
}
// 监听器2
var listener2 = function listener2() {
    console.log('监听器listener2执行')
}

// 绑定connection事件
// 为指定事件添加一个监听器
eventEmitter.addListener('connection', listener1);
// 为指定事件注册一个监听器
eventEmitter.on('connection', listener2);
// listenerCount:查找指定事件的监听器数量
var eventCounts = eventEmitter.listenerCount('connection')
console.log(eventCounts+"个监听器");
eventEmitter.emit('connection');
// removeListener：移除监听器
eventEmitter.removeListener('connection', listener1);
eventCounts = eventEmitter.listenerCount('connection')
console.log(eventCounts+"个监听器");
