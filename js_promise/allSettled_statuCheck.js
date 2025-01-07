const data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise1")
    },1000)
})
const data1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Rejected function")
    },1000)
})
Promise.allSettled([data,data1]).then(console.log).catch(console.log)
