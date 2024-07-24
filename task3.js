function createAdder(num1) {
    return function(num2) {
        return num1 + num2;
    };
}

let adderFunc = createAdder(5); 

let result = adderFunc(3); 
console.log("Результат:", result); 