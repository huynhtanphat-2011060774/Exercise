const originalArray = [3, 5, 2, 7, 8, 2, 5, 9];
const specifiedNumber = 10;

const newArray = originalArray.map(num => specifiedNumber);

console.log("Original Array:", originalArray);
console.log(`Array with all numbers replaced by ${specifiedNumber}:`, newArray);
