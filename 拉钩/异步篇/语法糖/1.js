function* gen() {
    console.log("enter");
    let a = yield 1;
    let b = yield (function () {return 2})();
    return 3;
  }
  var g = gen()           // 阻塞住，不会执行任何语句
  console.log(g.next())
  console.log(g.next())
  console.log(g.next())
  console.log(g.next()) 
  // output:
  // { value: 1, done: false }
  // { value: 2, done: false }
  // { value: 3, done: true }
  // { value: undefined, done: true }
  