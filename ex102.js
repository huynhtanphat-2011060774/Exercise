const array = [5, 3, 1, 4, 2];

let inversionCount = 0;

for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            inversionCount++;
        }
    }
}

console.log(`Number of inversions: ${inversionCount}`);
