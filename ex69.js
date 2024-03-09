function computeSum(arr) {
    if (arr.length === 3) {
      const sum = arr.reduce((acc, current) => acc + current, 0);
      return sum;
    } else {
      return "Please provide an array of integers with a length of 3.";
    }
  }
  const integerArray = [1, 2, 3];
  const result = computeSum(integerArray);
  console.log(result);
  