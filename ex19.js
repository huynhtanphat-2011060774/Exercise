function checkIntegerWithinRange(number) {
    return (Math.abs(100 - number) <= 20) || (Math.abs(400 - number) <= 20);
  }
  
  const givenInteger = 90;
  const result = checkIntegerWithinRange(givenInteger);
  console.log(`Result: ${result}`);
  