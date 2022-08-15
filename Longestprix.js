/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let size = strs.length;
    
    if(size == 0){
        return "";
    }
    if(size == 1){
        return strs[0];
    }
    
    strs.sort();
    
    let minimum = Math.min(strs[0].length, strs[size -1].length);
    
    let i = 0;
    while(i<minimum && strs[0][i] == strs[size -1][i]){
        i++;
    }
   let pre = strs[0].substring(0,i);
    return pre;