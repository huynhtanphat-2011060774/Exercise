function areIntegersSimilar(num1, num2, divisor) {
    const similarCondition = (num1 % divisor === 0 && num2 % divisor === 0) || (num1 % divisor !== 0 && num2 % divisor !== 0);
    return similarCondition;
}

const integer1 = 12;
const integer2 = 18;
const commonDivisor = 3;

const result = areIntegersSimilar(integer1, integer2, commonDivisor);

console.log(`Integers are similar: ${result}`);
