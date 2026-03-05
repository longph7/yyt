// 给定一个对象数组和一个回调函数，根据回调函数的返回值对数组元素进行分组。

// 例如：

// 输入: [{id: 1, type: 'A'}, {id: 2, type: 'B'}, {id: 3, type: 'A'}], item => item.type

// 输出: { A: [{id: 1, type: 'A'}, {id: 3, type: 'A'}], B: [{id: 2, type: 'B'}] }


function arrCheck(arr,callback){
    const ans = {};
    arr.forEach((item)=>{
        const key = callback(item);
        if(!ans[key]){
            ans[key]=[];
        }
        ans[key].push(item);
    })
    return ans;
}
function callback(item){
    return item.type;
}
const arr = [{id: 1, type: 'A'}, {id: 2, type: 'B'}, {id: 3, type: 'A'}];
console.log(arrCheck(arr,callback));