function findClosestTo100(num1, num2) {
    const targetValue = 100;
  
    const diff1 = Math.abs(num1 - targetValue);
    const diff2 = Math.abs(num2 - targetValue);
  
    return diff1 < diff2 ? num1 : num2;
  }
  

  const value1 = 125;
  const value2 = 111;
  
  const closestValue = findClosestTo100(value1, value2);
  console.log(`The closest value to 100 is: ${closestValue}`);
  