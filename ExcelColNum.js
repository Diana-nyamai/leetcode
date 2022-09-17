var titleToNumber = function(columnTitle) {
    var result = 0;
    for(let i=0; i<columnTitle.length; i++){
        result *= 26;
        result += columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }
    return result;
}

console.log(titleToNumber('B'))
