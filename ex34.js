function findLargestInRange(num1, num2) {
    const isInRange = (value) => value >= 40 && value <= 60;
  
    if (isInRange(num1) && isInRange(num2)) {
      return Math.max(num1, num2);
    } else {
      return "Both numbers should be in the range 40 to 60 inclusive";
    }
  }
  
  const positiveInteger1 = 50;
  const positiveInteger2 = 55;
  
  const largestNumber = findLargestInRange(positiveInteger1, positiveInteger2);
  console.log(`The largest number in the range is: ${largestNumber}`);
  