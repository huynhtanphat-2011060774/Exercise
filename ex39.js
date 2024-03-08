function computeSumAndCheckRange(num1, num2) {
    const sum = num1 + num2;
  
    if (sum >= 50 && sum <= 80) {
      return 65;
    } else {
      return 80;
    }
  }

  const integer1 = 30;
  const integer2 = 40;
  
  const result = computeSumAndCheckRange(integer1, integer2);
  console.log(`Result: ${result}`);
  