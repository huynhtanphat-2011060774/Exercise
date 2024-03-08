function checkNumbers(num1, num2) {
  return num1 === 50 || num2 === 50 || (num1 + num2) === 50;
}

const number1 = 30;
const number2 = 20;
const result = checkNumbers(number1, number2);
console.log(`Result: ${result}`);
