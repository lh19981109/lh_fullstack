//插入排序
function def(arr){
    let n=arr.length
    if(n<=1){
        return 
    }
    for(let i=0;i<n;i++){
        let pre = i - 1;
        let cur = arr[i];
        while(pre >= 0 && arr[pre] > cur) {
            arr[pre+1] = arr[pre];
            pre--;
        }
        arr[pre+1] = cur;
    }
    return arr
}
let arr=[2,5,7,1,34,23,22,31]
def(arr)
console.log(arr)