function createNewString(inputString, n) {
    if (inputString.length >= n) {
      const firstNCharacters = inputString.substring(0, n);
      const lastNCharacters = inputString.slice(-n);
      return firstNCharacters + lastNCharacters;
    } else {
      return "Please provide a string with a length of at least " + n + " characters.";
    }
  }
  
  const originalString = "JavaScript";
  const n = 3;
  const result = createNewString(originalString, n);
  console.log(result);
  