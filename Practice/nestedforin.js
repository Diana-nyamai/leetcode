const nestedforin = () =>{
   const infos = {
    names: 'diana',
    age: 24,
    cars: [
        {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name:"BMW", models:["320", "X3", "X5"]},
        {name:"Fiat", models:["500", "Panda"]}
    ]
   }
   sentence = ""
 
    for(let i in infos.cars){
    sentence += infos.cars[i].name + "====== \n"

    for(let j in infos.cars[i].models){
        sentence += infos.cars[i].models[j] + "\n"
    }
   }
   
 return sentence
}

console.log(nestedforin())