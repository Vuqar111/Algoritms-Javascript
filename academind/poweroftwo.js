function isPowerofTwo(number) {
  if(number < 1) {
      return false;
  }
  let dividedNumber = number;
  while(dividedNumber !== 1) {
      if(dividedNumber % 2 !== 0) {
          return false;
      }
      dividedNumber = dividedNumber / 2;
  }
  return true;
}

console.log(isPowerofTwo(8))
console.log(isPowerofTwo(5))
console.log(isPowerofTwo(16))
