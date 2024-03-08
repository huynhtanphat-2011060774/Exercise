function checkRange(integer1, integer2, integer3) {
    const isInRange = (value) => value >= 50 && value <= 99;
  
    return isInRange(integer1) || isInRange(integer2) || isInRange(integer3);
  }
  
  const num1 = 60;
  const num2 = 80;
  const num3 = 110;
  
  console.log(checkRange(num1, num2, num3)); // Should return true
  