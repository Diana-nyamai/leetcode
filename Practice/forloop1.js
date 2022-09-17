
        function loop1(){
            let arr1 = [2,3,4,5];
            let arr2 = [6,7,8,9];
            let sum1 = 0;
            let sum2 = 0;

            for(let i=0; i<=arr2.length; i++){
                arr =  arr2[i]
                console.log(arr)
                // sum1 += arr1[i]
                // sum1 += arr2[i]
            }
        }
    //  loop1()

    //  using reduce method
    function loop2(){
        const array1 = [1,2,3,4];

        const reducer = (accumulator, curr) => accumulator + curr

        console.log(array1.reduce(reducer)) ;
    }
    // loop2()

    // basic for loop
    function loop3(){
        total = 0;
        for(var i=0; i<=6; i++){
           total += i
        }
        return total
    }
//    console.log(loop3())

// loop through an array basic loop
function loop4(){
   var color = ['black', 'green', 'yellow','blue','violet']

   for(var i=0; i<color.length; i++){
      res = color[i];
      console.log(res+ "\n")
   }
}
loop4()
console.log("========================================= loop through an object \n ")
// loop through an object
function loop5(){
    var person = {
        name:  'diana',
        age: 23,
        height: '153cm'
    }

    for(var elem in person){
        res = elem
        console.log(res+ ":"+ person[elem] + "\n")
    }
}
loop5()

console.log("===================================== decrementing loop \n");

function loop6(){
    for(var i=10; i>=0; i--){
        console.log(i +"\n")
    }
}
loop6()
