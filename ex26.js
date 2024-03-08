function createStringWithLast3(inputString) {
    if (inputString.length < 3) {
      return "Invalid input";
    }
  
    const last3Chars = inputString.slice(-3);
  
    const modifiedString = last3Chars + inputString + last3Chars;
  
    return modifiedString;
  }
  
  const givenString = "phathuynhtanphat";
  const modifiedString = createStringWithLast3(givenString);
  
  console.log(`Original String: ${givenString}`);
  console.log(`Modified String: ${modifiedString}`);
  