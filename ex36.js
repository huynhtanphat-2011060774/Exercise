function checkLastDigitEquality(num1, num2, num3) {
    const lastDigit1 = num1 % 10;
    const lastDigit2 = num2 % 10;
    const lastDigit3 = num3 % 10;
  
    return lastDigit1 === lastDigit2 && lastDigit1 === lastDigit3;
  }
  
  const positiveInteger1 = 123;
  const positiveInteger2 = 456;
  const positiveInteger3 = 789;
  
  console.log(`Result: ${checkLastDigitEquality(positiveInteger1, positiveInteger2, positiveInteger3)}`);
  