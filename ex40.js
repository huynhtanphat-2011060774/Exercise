function checkEights(num1, num2) {
    return num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs(num1 - num2) === 8;
  }

  const integer1 = 5;
  const integer2 = 3;
  
  const result = checkEights(integer1, integer2);
  console.log(`Result: ${result}`);
  