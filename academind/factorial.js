function factorial(n) {
    let factor = 1;
    for(let i = 2; i <= n; i++) {
        factor = factor* i;
    }
    return factor;
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));