function checkNumberOrder(num1, num2, num3) {
    if (num1 < num2 && num2 < num3) {
      return "Strict mode";
    } else if (num1 <= num2 && num2 <= num3) {
      return "Soft mode";
    } else {
      return "Not increasing";
    }
  }
  
  const strictModeNumbers = [10, 15, 31];
  const softModeNumbers1 = [24, 22, 31];
  const softModeNumbers2 = [22, 22, 31];
  
  const resultStrict = checkNumberOrder(...strictModeNumbers);
  const resultSoft1 = checkNumberOrder(...softModeNumbers1);
  const resultSoft2 = checkNumberOrder(...softModeNumbers2);
  
  console.log(`Result Strict Mode: ${resultStrict}`); 
  console.log(`Result Soft Mode 1: ${resultSoft1}`); 
  console.log(`Result Soft Mode 2: ${resultSoft2}`); 
  