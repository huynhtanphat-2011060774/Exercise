
const integers = [12, 5, 8, 3, 7];

const largestValue = Math.max(integers[0], integers[integers.length - 1]);

for (let i = 1; i < integers.length - 1; i++) {
    integers[i] = largestValue;
}

console.log("Original Array ", integers);
