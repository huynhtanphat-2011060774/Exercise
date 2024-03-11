const matrix1 = [[1, 0, 0], [0, 2, 0], [0, 0, 3]];
const matrix2 = [[1, 0, 0], [0, 2, 3], [0, 0, 3]];

let isDiagonalMatrix1 = true;
let isDiagonalMatrix2 = true;

for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[i].length; j++) {
        if (i !== j && matrix1[i][j] !== 0) {
            isDiagonalMatrix1 = false;
            break;
        }
    }
}

for (let i = 0; i < matrix2.length; i++) {
    for (let j = 0; j < matrix2[i].length; j++) {
        if (i !== j && matrix2[i][j] !== 0) {
            isDiagonalMatrix2 = false;
            break;
        }
    }
}

console.log(`Matrix 1 is diagonal: ${isDiagonalMatrix1}`);
console.log(`Matrix 2 is diagonal: ${isDiagonalMatrix2}`);
