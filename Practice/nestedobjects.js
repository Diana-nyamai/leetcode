const nestedobject = () =>{
  let person = [
    {
    fullname: {
        fname: 'diana',
        lname: 'nyamai'
    },
    age: 21,
  },
  {
    fullname: {
        fname: 'gee',
        lname: 'nyamai'
    },
    age: 21
  }
]
  return person.map(p => 
    p.fullname.fname
    )
}
// console.log(nestedobject())
const nestedobject2 = () =>{
    const person = {
      age: 21,
      fullname: {
        fname: 'diana'
      }
    }
   
   Object.values(person).forEach(val => {
    console.log(val)
   })
    }
    nestedobject2()
    // console.log(nestedobject2())

