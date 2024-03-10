const integers = [5, 2, 8, 3, 7];

let sumOfAbsoluteDifferences = 0;

for (let i = 1; i < integers.length; i++) {
    sumOfAbsoluteDifferences += Math.abs(integers[i] - integers[i - 1]);
}

console.log(`Sum of absolute differences of consecutive numbers: ${sumOfAbsoluteDifferences}`);
