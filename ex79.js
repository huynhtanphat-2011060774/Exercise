const integers = [20, 30, 40, 20];
const contains30And40Twice = integers.length <= 2 && integers.filter(num => num === 30 || num === 40).length === 2;
console.log(`Result: ${contains30And40Twice ? "The array contains 30 and 40 twice." : "The array does not contain 30 and 40 twice."}`);
