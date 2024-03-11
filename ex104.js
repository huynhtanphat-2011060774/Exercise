function findClosestElements(arr, target) {
    let result = [];
    let minDifference = Infinity;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const currentDifference = Math.abs(arr[i] - arr[j]);

            if (currentDifference <= target && currentDifference < minDifference) {
                result = [arr[i], arr[j]];
                minDifference = currentDifference;
            }
        }
    }

    return result;
}

const array = [5, 12, 8, 3, 7];
const targetDifference = 2;

const closestElements = findClosestElements(array, targetDifference);

console.log(`Two elements with closest absolute difference: ${closestElements}`);
