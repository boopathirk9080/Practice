const data=inputvalue=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(inputvalue)
        resolve(inputvalue+100)
        else
        reject("just input a value")
    },1000);
})

const userinputvalue=22
data(userinputvalue).then(recivedvalue=> recivedvalue+100).then(console.log).catch(console.log)
