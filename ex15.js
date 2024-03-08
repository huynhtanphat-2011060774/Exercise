function calculateDifference(number) {
    const difference = Math.abs(number - 13);
  
    if (number > 13) {
      return difference * 2;
    } else {
      return difference;
    }
  }
  
  const givenNumber = 18;
  const result = calculateDifference(givenNumber);
  console.log(`The difference is: ${result}`);
  