function printNumbers(num1, num2) {
    if (num1 > num2) {
        console.log("Первое число должно быть меньше или равно второму числу");
        return;
    }

    let currentNumber = num1;
    const intervalId = setInterval(function() {
        console.log(currentNumber);
        if (currentNumber === num2) {
            clearInterval(intervalId);
        }
        currentNumber++;
    }, 1000); // 
}

printNumbers(5, 15);