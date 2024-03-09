function extractFirstHalf(inputString) {
    if (inputString.length % 2 === 0) {
      const halfIndex = inputString.length / 2;
  
      const firstHalf = inputString.substring(0, halfIndex);
  
      return firstHalf;
    } 
    else 
    {
      return "Please provide an even-length string.";
    }
  }
  

  const evenString = "abcdefgh";
  const result = extractFirstHalf(evenString);
  console.log(result);
  