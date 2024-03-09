function updateString(originalString) {
    if (originalString.length >= 3) {
      const lastThreeCharacters = originalString.slice(-3);
  

      const updatedString = lastThreeCharacters.repeat(4);
  
      return updatedString;
    } else {

      return "Please provide a string with a length of 3 or above.";
    }
  }
  
  const inputString = "javascript";
  const result = updateString(inputString);
  console.log(result);
  