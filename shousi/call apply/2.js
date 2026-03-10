Function.prototype.myApply = function(contex,args){
    const fn = Symbol();
    contex[fn] = this;
    const result = contex[fn](...args);
    delete contex[fn];
    return result;
}   
const obj = {name:'小王'}

function say(a,b,c){
    console.log(this.name);
    console.log(a,b,c);
}

say.myApply(obj,[1,2,3])
