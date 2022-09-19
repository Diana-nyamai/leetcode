const objectdefine = () =>{
    const state = {
        count: 0
    }
    Object.defineProperty(state, 'reset',
    {get: function(){this.count = 0}
    })
    Object.defineProperty(state, 'increment', {
        get: function(){this.count + 1}
    })
    Object.defineProperty(state, 'decrement', {
        get: function(){this.count + 1}
    })
    Object.defineProperty(state, 'add', {
        set: function(value){this.count += value}
    })
    Object.defineProperty(state, 'substract', {
        set: function(value){this.count -= value}
    })
    
    state.reset;
    state.add = 5
    state.substract = 2
    state.increment
    state.decrement
  return state.count

}
console.log(objectdefine())