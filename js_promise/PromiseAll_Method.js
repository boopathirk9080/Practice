const data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise1")
    },1000)
})
const data1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise2")
    },1000)
})
Promise.all([data,data1]).then(console.log).catch(console.log)
