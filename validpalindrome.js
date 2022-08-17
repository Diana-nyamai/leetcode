const valindrome = function(s){
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    f = 0;
    l = s.length - 1;

    while(f<l){
        if(s[f] !== s[l]){
            return false;
        }
        f++;
        l--;
    }
    return true;
}