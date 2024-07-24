function checkPrime(number) {
    if (number <= 1 || number > 1000) {
        console.log("Данные неверны, необходимо число от 2 до 1000");
        return;
    }

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} - простое число`);
    } else {
        console.log(`${number} - не простое число`);
    }
}

checkPrime(7);   // 7 - простое число
checkPrime(20);  // 20 - не простое число
checkPrime(0);   // Данные неверны
checkPrime(999); // 999 - не простое число
checkPrime(1001); // Данные неверны