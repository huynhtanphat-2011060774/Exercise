function checkRange(integer1, integer2) {
    const isInRange = (value) => value >= 50 && value <= 99;
  
    return isInRange(integer1) || isInRange(integer2);
  }
  
  const num1 = 60;
  const num2 = 80;
  
  console.log(checkRange(num1, num2)); 
  