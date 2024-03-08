function checkNumberRange(num1, num2) {
    const isInRange = (value) => (value >= 40 && value <= 60) || (value >= 70 && value <= 100);
  
    return isInRange(num1) && isInRange(num2);
  }
  
  const number1 = 45;
  const number2 = 80;
  
  console.log(checkNumberRange(number1, number2));
  