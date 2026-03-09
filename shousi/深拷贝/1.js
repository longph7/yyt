//实现深拷贝加解决循环引用问题

function deepCopy(obj,map = new WeakMap()){
    if(typeof obj !=='object' || obj ===null){
        return obj;
    }
    if(map.has(obj)){
        return map.get(obj);
    }
    const newObj = Array.isArray(obj)?[]:{};
    map.set(obj,newObj);
    for(let k in obj){
        if(obj.hasOwnProperty(k)){
            newObj[k] = deepCopy(obj[k],map);
        }
    }
    return newObj;
}

const obj = {
    a:1,
    b:{
        c:2,
        a:3
    }
}

const newObj = deepCopy(obj);
console.log(newObj);