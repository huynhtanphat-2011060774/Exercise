function createNewString(inputString) {
    if (inputString.length >= 2 && inputString[0] === 'P' || inputString.slice(-1) === 'P') {
      return inputString.slice(1, -1);
    } else {
      return inputString;
    }
  }
  
  const originalString1 = "Programming";
  const originalString2 = "JavaScript";
  const result1 = createNewString(originalString1);
  const result2 = createNewString(originalString2);
  
  console.log(result1);
  console.log(result2);
  