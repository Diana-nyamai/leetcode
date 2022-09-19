const foreach = () =>{
     const fruits = ["apple", "banana", "orange"]
     let txt = ''
    fruits.forEach((p) =>
      txt += p + "\t"
    )
    return txt 
}
console.log(foreach('kamama'))