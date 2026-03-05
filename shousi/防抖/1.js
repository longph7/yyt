// 实现一个防抖函数 `debounce(func, wait, immediate)`。
// 该函数用于限制某个函数的执行频率，即在指定的时间 `wait` 内，
// 如果该函数被多次调用，则只执行最后一次调用，支持通过immediate
// 来指定是否立即执行

function debounce(func,wait,immediate){
    let time = null;
    const debounced =function(...args){
        clearTimeout(time);
        const callNow = immediate && !time
        time = setTimeout(()=>{
            time = null;
            if(!immediate)func.apply(this,args);
        },wait);
        if(callNow){
             func.apply(this,args);
        }
    }
    debounced.cancel = ()=>{
        clearTimeout(time); 
        time = null;
    }
    return debounced;
}