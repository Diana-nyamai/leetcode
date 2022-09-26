let p = new Promise((resolve, reject) =>{
    a = 1+2
    if(a == 2){
        resolve('success')
    }
    else{
        reject('failure')
    }
})
p.then(message =>{
    console.log('this is a ' + message)
}).catch(message =>{
    console.log('this is a ' + message)
})
    