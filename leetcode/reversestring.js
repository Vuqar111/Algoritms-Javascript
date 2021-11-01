

function reverseString(str) {
    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}



//Leetcode solution
function reverseString(s) {

    let left  = 0;
    let right = s.length - 1;
    
    while(left < right) {
       let hold = s[left];
       s[left] = s[right]
       s[right] = hold;
       left++
       right-- 
       
    }
}