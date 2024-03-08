function computeAbsoluteDifference(number) {
  const absoluteDifference = Math.abs(number - 19);

  if (number > 19) {
    return 3 * absoluteDifference;
  } else {
    return absoluteDifference;
  }
}

const specifiedNumber = 25;
const result = computeAbsoluteDifference(specifiedNumber);
console.log(`The result is: ${result}`);
