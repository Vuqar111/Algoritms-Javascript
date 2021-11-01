const numbers = [2,3,4,5];

function sumNumber(arraysum) {
 let result  = 0; //1
 for (const number of arraysum) {
     result += number //4
 }
 return result; //1



//  return arraysum.reduce((num, curNum) => num + curNum, 0);



}

console.log(sumNumber(numbers));