const forin = () =>{
   const person = {
    fname: 'diana',
    age: 24,
    dob: 1998
   }
   
   let sentence = ""
   for(let p in person){
    sentence += person[p] + "\t"
   }
   return sentence
}
console.log(forin())