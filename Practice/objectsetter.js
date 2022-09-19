const objectsetter = () =>{
  const person = {
    name: 'diana',
    age: 34,
    language: '',
    set Lang(lang){
        return this.language = lang.toUpperCase()
    }
  }
 person.Lang = 'en'
 return person.language

}
console.log(objectsetter())