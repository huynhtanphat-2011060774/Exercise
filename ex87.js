function areArraysSimilar(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let diffCount = 0;
    let diffIndices = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            diffCount++;
            diffIndices.push(i);
        }
    }

    return diffCount === 0 || (diffCount === 2 && arr1[diffIndices[0]] === arr2[diffIndices[1]] && arr1[diffIndices[1]] === arr2[diffIndices[0]]);
}

const array1 = [1, 2, 3, 4];
const array2 = [1, 4, 3, 2];

const result = areArraysSimilar(array1, array2);

console.log(`Arrays are similar: ${result}`);
