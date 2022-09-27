const foreach = () =>{
     const fruits = ["apple", "banana", "orange"]
     let txt = ''
    fruits.forEach((fruit) =>
      txt += fruit + "\t"
    )
    return txt 
}
console.log(foreach())