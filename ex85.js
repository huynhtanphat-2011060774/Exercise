const positiveIntegers = [3, 8, 4, 6, 2];

let sumOfPart1 = 0;
let sumOfPart2 = 0;

for (let i = 0; i < positiveIntegers.length; i++) {
    if (i % 2 === 0) {
        sumOfPart1 += positiveIntegers[i];
    } else {
        sumOfPart2 += positiveIntegers[i];
    }
}

const resultArray = [sumOfPart1, sumOfPart2];

console.log("Original Array:", positiveIntegers);
console.log("Sum of Two Parts:", resultArray);
