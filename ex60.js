function removeFirstAndLastCharacters(inputString) {
    if (inputString.length >= 2) {
    
      const newString = inputString.substring(1, inputString.length - 1);
      return newString;
    } else {
      return "Please provide a string with at least two characters.";
    }
  }
  
  const originalString = "exercise";
  const result = removeFirstAndLastCharacters(originalString);
  console.log(result);
  