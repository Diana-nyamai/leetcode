const objectgetter = () =>{
   const person = {
    name: 'deedee',
    age: 24,
    language: 'swa',
    get lang(){
        return this.language
    }
   }

   return "i love " + person.lang
}
console.log(objectgetter())