function createStringFromMiddleThree(inputString) {
    if (inputString.length % 2 === 1 && inputString.length >= 3) {
      const middleIndex = Math.floor(inputString.length / 2);
  

      const middleThreeCharacters = inputString.substring(middleIndex - 1, middleIndex + 2);
  
      return middleThreeCharacters;
    } else {
      return "Please provide a string with an odd length of three or more characters.";
    }
  }
  
  const originalString = "abcdefg";
  const result = createStringFromMiddleThree(originalString);
  console.log(result);
  