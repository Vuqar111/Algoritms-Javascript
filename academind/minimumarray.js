function getMin(numbers) {
    let currentMin = numbers[0];
    for(const num of numbers) {
        if(num < currentMin) {
            currentMin = num;
        }
    }
    return currentMin;
}



console.log(getMin([1,2,3]))
console.log(getMin([4,7,13 ]))