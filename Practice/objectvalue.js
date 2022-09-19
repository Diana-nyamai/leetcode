const objectvakue = () =>{
    const person = {
        name: 'diana',
        age: 24,
        car: 'BMW'
    }

    let res = Object.values(person).toString()
    return res
}
// console.log(objectvakue())

// using JSON.stringify

const objectvakues = () =>{
    const person = {
        name: 'diana',
        age: 24,
        car: 'BMW'
    }

    let res = JSON.stringify(person)
    return res
}
console.log(objectvakues())