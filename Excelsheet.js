function convertToTitle(columnNumber) {
    // intialize the column name as an empty array
    let columnName = [];

    while(columnNumber > 0){
    var remainder = columnNumber % 26;
        
    // if the modulus is zero
        if(remainder == 0){
        columnName.push('Z');
        columnNumber = Math.floor(columnNumber/26) - 1;
        }
    //   if modulus is not zero
    // convert the column number minus 1 to unicode then add  the unicode of the character code of A
    else{
        columnName.push(String.fromCharCode((remainder -1) +  'A'.charCodeAt(0)));
        columnNumber = Math.floor(columnNumber/26);
    }}
    console.log(columnName.reverse().join(""))
        };

    convertToTitle(701)
