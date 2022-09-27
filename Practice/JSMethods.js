const filterMethod = () =>{
    // array of objects
  const items = [
    {name: 'diana', amount: 2000},
    {name: 'stephi', amount: 100},
    {name: 'fiona', amount: 10},
    {name: 'nyamai', amount: 500},
    {name: 'phyll', amount: 3000},
    {name: 'jere', amount: 200}
  ]
  return (
    items.filter(item => item.amount >= 500
)
  )
}
// console.log(filterMethod())

const foreachMethod = () =>{
    const items = [
        {name: 'diana', amount: 2000},
        {name: 'stephi', amount: 100},
        {name: 'fiona', amount: 10},
        {name: 'nyamai', amount: 500},
        {name: 'phyll', amount: 3000},
        {name: 'jere', amount: 200}
      ]
    return(
        items.forEach(item => console.log(item.amount))
    )
}
// foreachMethod()

const findMethod =() =>{
    const items = [
        {name: 'diana', amount: 2000},
        {name: 'stephi', amount: 100},
        {name: 'fiona', amount: 10},
        {name: 'nyamai', amount: 500},
        {name: 'phyll', amount: 3000},
        {name: 'jere', amount: 200}
      ]
    return(
        items.find(item => item.name === 'phyll')
    )
}
// console.log(findMethod())

const reduceMethod = () =>{
    const items = [
        {name: 'diana', amount: 2000},
        {name: 'stephi', amount: 100},
        {name: 'fiona', amount: 10},
        {name: 'nyamai', amount: 500},
        {name: 'phyll', amount: 3000},
        {name: 'jere', amount: 200}
      ]
      
      return(
        items.reduce((intitialValue, item) =>{
          item.amount + intitialValue
        },0)
      )
}
console.log(reduceMethod())