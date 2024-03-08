function manipulateString(inputString) {
    if (inputString.length < 3) {
      return inputString.toUpperCase();
    } else {
      const first3Chars = inputString.substring(0, 3).toLowerCase();
      const remainingChars = inputString.substring(3);
      return first3Chars + remainingChars;
    }
  }

  const testString1 = "JavaScript";
  const testString2 = "JS";
  
  console.log(`Result 1: ${manipulateString(testString1)}`);
  console.log(`Result 2: ${manipulateString(testString2)}`);
  