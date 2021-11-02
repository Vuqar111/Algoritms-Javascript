function fibanocci(n) {
    const numbers = [1,1];
    for(let i = 2; i < n+1; i++) {
        numbers.push(numbers[i-1] + numbers[i-2])
    }
    console.log(numbers);
    return n;

}


console.log(fibanocci(4))