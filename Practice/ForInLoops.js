// accessing all the properties in an object
const forin = () =>{
   const person = {
    fname: 'diana',
    age: 25,
    dob: 1998
   }
   
   let sentence = ""
   for(let p in person){
    sentence += person[p]+ "\t"
   }
   return sentence
}
console.log(forin())