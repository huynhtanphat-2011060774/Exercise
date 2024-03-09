function moveLastThreeToStart(inputString) {
  
    if (inputString.length >= 3) {
      const lastThreeCharacters = inputString.slice(-3);
  
      const stringWithoutLastThree = inputString.slice(0, -3);
  
      const resultString = lastThreeCharacters + stringWithoutLastThree;
  
      return resultString;
    } else {

      return "Please provide a string with a length of three or more characters.";
    }
  }
  
  const originalString = "abcdefgh";
  const result = moveLastThreeToStart(originalString);
  console.log(result);
  