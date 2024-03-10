function findKthGreatestElement(arr, k) {
    const sortedArray = arr.slice().sort((a, b) => b - a);

    if (k > 0 && k <= sortedArray.length) {
        return sortedArray[k - 1];
    } else {
        return "Invalid k value";
    }
}

const integerArray = [12, 5, 8, 9, 3, 15];
const kValue = 3;

const result = findKthGreatestElement(integerArray, kValue);

console.log(`The ${kValue}th greatest element is: ${result}`);
