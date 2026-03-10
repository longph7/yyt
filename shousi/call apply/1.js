Function.prototype.myCall = function(contex){
    const fn = Symbol();
    contex[fn] = this;
    const result = contex[fn]();
    delete contex[fn];
    return result;
}
const person = {
    name:'yyt',
    age:18
}
function show(str){
    console.log(this.name);
    console.log(str);
}

const res = show.myCall(person,'hello');
