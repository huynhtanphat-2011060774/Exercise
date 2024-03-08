function checknumberset(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
      return 30;
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
      return 40;
    } else {
      return 20;
    }
  }

  const numberSet1 = [5, 5, 5];
  const numberSet2 = [7, 5, 7];
  const numberSet3 = [3, 8, 6];

  const result1 = checknumberset(...numberSet1);
  const result2 = checknumberset(...numberSet2);
  const result3 = checknumberset(...numberSet3);

  console.log(`Result 1: ${result1}`); 
  console.log(`Result 2: ${result2}`); 
  console.log(`Result 3: ${result3}`); 
  