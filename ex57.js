function repeatString(inputString, numberOfCopies) {
    if (Number.isInteger(numberOfCopies) && numberOfCopies > 0) {

      const repeatedString = inputString.repeat(numberOfCopies);
      return repeatedString;
    } else {
    
      return "Please provide a positive integer for the number of copies.";
    }
  }
  
  const originalString = "Hello .  ";
  const numberOfCopies = 3;
  const result = repeatString(originalString, numberOfCopies);
  console.log(result);
  