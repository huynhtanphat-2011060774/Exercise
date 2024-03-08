function findLargestInteger(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  
  const integer1 = 45;
  const integer2 = 82;
  const integer3 = 60;
  
  const largestInteger = findLargestInteger(integer1, integer2, integer3);
  console.log(`The largest integer is: ${largestInteger}`);
  