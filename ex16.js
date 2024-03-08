function computeSumAndTriple(num1, num2) {
  const sum = num1 + num2;

  if (num1 === num2) {
    return 3 * sum;
  } else {
    return sum;
  }
}

const number1 = 5;
const number2 = 5;
const result = computeSumAndTriple(number1, number2);
console.log(`The result is: ${result}`);
