function divideIntegers(dividend, divisor) {
    let result = 0;

    while (dividend % divisor === 0) {
        dividend /= divisor;
        result++;
    }

    return result;
}

const numerator = 24;
const denominator = 3;

const result = divideIntegers(numerator, denominator);

console.log(`Result of integer division: ${result}`);
