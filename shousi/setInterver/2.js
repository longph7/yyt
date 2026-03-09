// 倒计时组件


function cutDown(seconds){
    const time = setInterval(function(){ 
        if(seconds<=0){
            clearInterval(time);
            console.log("倒计时结束");
        }
      
        console.log(`还剩${seconds}秒`)
        seconds--;}
        ,1000)
    
}

cutDown(10);