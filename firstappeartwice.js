const firstletterappeartwice = (s) =>{
  let set = new Set();

  for(let i=0; i<s.length; i++){
    let c = s[i]
    if(set.has(c))
        return c
    else
        set.add(c)
  }
}
console.log(firstletterappeartwice("gass"))

// big o is O(n)