// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string}
//  /
var addBinary = function(a, b) 
{
    let result = ""
    
    let firstLength = a.length - 1
    let secondLength = b.length - 1
    
    let carry = 0
    
    while(firstLength >= 0 || secondLength >= 0)
        {
            let totalSum = carry 
            
            if(firstLength >= 0) totalSum += a[firstLength--] - '0'
            if(secondLength >= 0) totalSum += b[secondLength--] - '0'
            
            carry = totalSum > 1 ? 1 : 0
            
            result += (totalSum % 2)
        }
    
    if(carry !== 0)
        result += carry
    
    return reverse(result)
    
};

function reverse(str)
{
    return str.split("").reverse().join("")
}/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) 
{
    let result = ""
    
    let firstLength = a.length - 1
    let secondLength = b.length - 1
    
    let carry = 0
    
    while(firstLength >= 0 || secondLength >= 0)
        {
            let totalSum = carry 
            
            if(firstLength >= 0) totalSum += a[firstLength--] - '0'
            if(secondLength >= 0) totalSum += b[secondLength--] - '0'
            
            carry = totalSum > 1 ? 1 : 0
            
            result += (totalSum % 2)
        }
    
    if(carry !== 0)
        result += carry
    
    return reverse(result)
    
};

function reverse(str)
{
    return str.split("").reverse().join("")
}