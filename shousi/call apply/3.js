Function.prototype.myBind = function(contex,...args1){
   fn = this;
   return function(...args2){
    return fn.apply(contex,[...args1,...args2]);
   }
}  

const obj = {name:'小王'}

function say(a,b,c,d) {
    console.log(this.name,a,b,c,d);
}
say.myBind(obj,1,2,3)(4.2);
