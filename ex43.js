function checkRightmostDigit(num1, num2, num3) {
    const lastDigit1 = num1 % 10;
    const lastDigit2 = num2 % 10;
    const lastDigit3 = num3 % 10;
  
    return lastDigit1 === lastDigit2 || lastDigit1 === lastDigit3 || lastDigit2 === lastDigit3;
  }
  
  const numbersSet1 = [15, 25, 35];
  const numbersSet2 = [42, 72, 32];
  const numbersSet3 = [7, 14, 21];
  
  const result1 = checkRightmostDigit(...numbersSet1);
  const result2 = checkRightmostDigit(...numbersSet2);
  const result3 = checkRightmostDigit(...numbersSet3);
  
  console.log(`Result 1: ${result1}`);
  console.log(`Result 2: ${result2}`); 
  console.log(`Result 3: ${result3}`); 
  