// swapping ways
function swapping(arr){
    for(let i=0; i<arr.length-1; i++){
        var temp;
        temp = arr[i];
        arr[i] = arr[i + 1]
        arr[i+1] = temp
    }

    return arr
   
}
console.log(swapping2([4,6]) + " swapping method 1");


function swapping2(arr){
    for(let i=0; i<arr.length-1; i++){
        arr[i , i+1] = arr[i+1, i]
    }
    return arr
   
}
console.log(swapping2([6,9]) + " swapping method 2");