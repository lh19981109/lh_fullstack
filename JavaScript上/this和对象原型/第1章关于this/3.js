function foo(num){
    console.log("foo:"+ num);
    //记录foo被调用的次数
    foo.count++;
}
foo.count=0;
var i;
for(i=0;i<10;i++){
    if(i>5){
        foo(i);
    }
}
//foo:6
//foo:7
//foo:8
//foo:9
//foo 被调用了多少次
console.log(foo.count);//4