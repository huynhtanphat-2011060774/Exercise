function checkOppositeSigns(num1, num2) {
    return (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0);
  }
  const integer1 = 10;
  const integer2 = -5;
  const result = checkOppositeSigns(integer1, integer2);
  console.log(`Result: ${result}`);
  