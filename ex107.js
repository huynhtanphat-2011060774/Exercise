function countSortedPairs(arr) {
    let count = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
                count++;
            }
        }
    }

    return count;
}

const array1 = [1, 3, 2];
const array2 = [2, 4, 6];
const array3 = [2, 4, 16];

const result1 = countSortedPairs(array1);
const result2 = countSortedPairs(array2);
const result3 = countSortedPairs(array3);

console.log(`Number of sorted pairs in [1, 3, 2]: ${result1}`);
console.log(`Number of sorted pairs in [2, 4, 6]: ${result2}`);
console.log(`Number of sorted pairs in [2, 4, 16]: ${result3}`);
