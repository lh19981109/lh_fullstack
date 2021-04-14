//filter
// 参数: 一个函数参数。这个函数接受一个默认参数，就是当前元素。这个作为参数的函数返回值为一个布尔类型，决定元素是否保留。
// filter方法返回值为一个新的数组，这个数组里面包含参数里面所有被保留的项。
let nums = [4, 3, 5];
// 保留奇数项
let oddNums = nums.filter(item => item % 2);
console.log(oddNums);