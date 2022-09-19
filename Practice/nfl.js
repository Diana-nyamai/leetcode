const nfl = () =>{
 const person = {
    name: 'diana',
    age: 50,
    cars:[
        {name: 'ford', models:["fiesta", "focus","mustang"]},
        {name: 'BMW', models:["320", "X3","X5"]}
    ]
 }
 let sentence = ""
 for(let i in person.cars){
    sentence += person.cars[i].name + "------\n"

    for(let j in person.cars[i].models){
        sentence += person.cars[i].models[j] + "\n"
    }
 }

 return sentence
}
console.log(nfl())