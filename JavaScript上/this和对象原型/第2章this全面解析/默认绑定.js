/* function foo(){
    console.log(this.a);
}
var a = 2;
foo();//2
 */

/* function foo(){
    "use strict"
    console.log(this.a);
} */
function foo(){
    console.log(this.a);
}
var a = 2;
(function(){
    "use strict";
    foo();
})();