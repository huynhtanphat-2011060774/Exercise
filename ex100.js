const array1 = [1, 3, 5, 7, 9];
const array2 = [2, 4, 6, 7, 10];

let hasCommonElement = false;

let i = 0;
let j = 0;

while (i < array1.length && j < array2.length) {
    if (array1[i] === array2[j]) {
        hasCommonElement = true;
        break;
    } else if (array1[i] < array2[j]) {
        i++;
    } else {
        j++;
    }
}

console.log(`At least one common element: ${hasCommonElement}`);
