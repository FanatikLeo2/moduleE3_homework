const power = (x, n) => {
    if (n === 0) {
        return 1;
    }

    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
};


console.log(power(2, 3));
console.log(power(5, 0)); 
console.log(power(2, 100));
console.log(power(0, 5));