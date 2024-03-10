const positiveIntegers = [2, 5, 1, 8, 3, 7];
const kValue = 3;

if (positiveIntegers.length < kValue) {
    console.log("Invalid input. Array length should be greater than or equal to k.");
} else {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < kValue; i++) {
        currentSum += positiveIntegers[i];
    }

    maxSum = currentSum;

    for (let i = kValue; i < positiveIntegers.length; i++) {
        currentSum = currentSum - positiveIntegers[i - kValue] + positiveIntegers[i];
        maxSum = Math.max(maxSum, currentSum);
    }

    console.log(`Maximum sum of ${kValue} consecutive numbers: ${maxSum}`);
}
