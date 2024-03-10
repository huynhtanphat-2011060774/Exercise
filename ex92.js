const integers = [5, 2, 8, 3, 7];

let maxDifference = 0;

for (let i = 1; i < integers.length; i++) {
    const difference = Math.abs(integers[i] - integers[i - 1]);
    maxDifference = Math.max(maxDifference, difference);
}

console.log(`Maximum difference between adjacent elements: ${maxDifference}`);
