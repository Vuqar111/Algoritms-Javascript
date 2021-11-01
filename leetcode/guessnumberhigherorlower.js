var guessNumber = function(n) {
 
    
    let left = 1, right = n;
    
    while(left < right) {
        const mid  = left + Math.floor((right - left) /2)
        const current = guess(mid)
        if(current === 0) {
            return mid
        }
        if(current === -1) {
            right = mid
        }
        else {
            left = mid + 1
        }
    }
    return left;
    
};