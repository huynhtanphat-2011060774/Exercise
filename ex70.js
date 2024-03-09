function rotateLeft(arr) {
    if (arr.length === 3) {
      const [first, second, third] = arr;
      const rotatedArray = [second, third, first];
      return rotatedArray;
    } else {
      return "Please provide an array of integers with a length of 3.";
    }
  }
  
  const integerArray = [1, 2, 3];
  const rotatedResult = rotateLeft(integerArray);
  console.log(rotatedResult);
  