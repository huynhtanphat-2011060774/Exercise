function addFirstCharacterToFrontAndBack(inputString) {
    if (inputString.length === 0) {
      return "Invalid input";
    }
  
    const firstChar = inputString[0];
  
    const modifiedString = firstChar + inputString + firstChar;
  
    return modifiedString;
  }
  
  const givenString = "helloword";
  const modifiedString = addFirstCharacterToFrontAndBack(givenString);
  
  console.log(`Original String: ${givenString}`);
  console.log(`Modified String: ${modifiedString}`);
  