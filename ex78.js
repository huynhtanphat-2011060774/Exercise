const integers = [2, 4];
const doesNotContainOneOrThree = !integers.includes(1) && !integers.includes(3);
console.log(`Result: ${doesNotContainOneOrThree ? "The array does not contain 1 or 3." : "The array contains 1 or 3."}`);
