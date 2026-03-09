
// 手撕promise.all

Promise.myAll = function(promises){
    return new Promise((resolve,reject)=>{
        const result = [];
        let count = 0;
        if(promises.length === 0){
            resolve([]);
            return;
        }
        promises.forEach((item,index)=>{
            Promise.resolve(item)
            .then((value)=>{
                result[index] = value;
                count++;
                if(count === promises.length){
                    resolve(result);
                }
            })
            .catch((err)=>{
                reject(err);
            })
        })
    })
}

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1);
    },1000)
})

