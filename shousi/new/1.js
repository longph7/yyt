
function myNew(Obj){
    let newObj = Object.create(Obj.prototype);
    const result = Obj.call(newObj);
    if(typeof result ==='Object' && result!==null || typeof result === 'Function'){
        return result;
    }
    return newObj;
}