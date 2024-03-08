function addPyPrefix(inputString) {
    if (inputString.startsWith("Py")) {
      return inputString;
    } else {
      return "Py" + inputString;
    }
  }

  const givenString1 = "em";
  const givenString2 = "Pyphat";
  const result1 = addPyPrefix(givenString1);
  const result2 = addPyPrefix(givenString2);
  
  console.log(`Result 1: ${result1}`);
  console.log(`Result 2: ${result2}`);
  