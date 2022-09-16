function swapping(arr){
    for(let i=0; i<arr.length-1; i++){
        var temp;
        temp = arr[i];
        arr[i] = arr[i + 1]
        arr[i+1] = temp
    }

    return arr
   
}

document.getElementById('swapping').innerHTML = swapping([4,6])