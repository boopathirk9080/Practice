// async function myfunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hello")
//         }, 500);

//     })
// }
// async function awaitfn() {
//     const output = await myfunction()
//     console.log(output);
// }
// awaitfn()

async function myfunction(){
    return new Promise((resolve, reject) =>    
        setTimeout(() => {
            resolve("hello")
        }, 1000))
    
}

async function awaitfn() {
    myfunction().then(console.log)
}
awaitfn()
