function isMultipleOf3Or7(number) {
    return (number % 3 === 0) || (number % 7 === 0);
  }

  const positiveNumber = 21;
  const result = isMultipleOf3Or7(positiveNumber);
  
  console.log(`Result ${positiveNumber}: ${result}`);
  