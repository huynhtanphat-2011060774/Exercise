const integers = [5, 2, 8, 3, 7];

let maxDifference = 0;

for (let i = 0; i < integers.length - 1; i++) {
    for (let j = i + 1; j < integers.length; j++) {
        const difference = Math.abs(integers[j] - integers[i]);
        maxDifference = Math.max(maxDifference, difference);
    }
}

console.log(`Maximum difference among all possible pairs: ${maxDifference}`);
