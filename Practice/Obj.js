const obj = () =>{
    const cars = [
        {
            name: "honda",
            color: 'blue'
        },
        {
            name: 'mercedes',
            color: 'black'
        }
    ]

    const final = cars.map(car => 
        car.name )
    
        return final
}
console.log(obj())