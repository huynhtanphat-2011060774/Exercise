function changeFirstAndLast(inputString) {
    if (inputString.length < 1) {
      return "Invalid input";
    }
  
    const firstChar = inputString[0];
    const lastChar = inputString[inputString.length - 1];
  
    const modifiedString = lastChar + inputString.slice(1, inputString.length - 1) + firstChar;
  
    return modifiedString;
  }
  
  const givenString = "helloword";
  const modifiedString = changeFirstAndLast(givenString);
  
  console.log(`Original String: ${givenString}`);
  console.log(`Modified String: ${modifiedString}`);
  