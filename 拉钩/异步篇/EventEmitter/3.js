var events = require('events');
var emitter = new events.EventEmitter();
function hello(name){
  console.log("hello",name);
}
emitter.on('say',hello);
emitter.emit('say','John');
emitter.emit('say','Lily');
emitter.emit('say','Lucy');
//会输出 hello John、hello Lily、hello Lucy，之后还要加也可以继续触发
emitter.once('see',hello);
emitter.emit('see','Tom');
//只会输出一次 hello Tom
