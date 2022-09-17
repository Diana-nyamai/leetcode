var convertToTitle = function(columnNumber) {
    let colName = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let res = ""

    while(columnNumber > 0){
        columnNumber--
        res = colName[columnNumber % 26] + res
        columnNumber = Math.floor(columnNumber/26);
        // columnNumber--
    }
    return res
}

console.log(convertToTitle(701))
