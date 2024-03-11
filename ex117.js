function isIdentityMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === j && matrix[i][j] !== 1) {
                return false;
            } else if (i !== j && matrix[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}

const matrix1 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
const matrix2 = [[1, 0, 0], [0, 1, 0], [1, 0, 1]];

console.log(`Matrix 1 is an identity matrix: ${isIdentityMatrix(matrix1)}`);
console.log(`Matrix 2 is an identity matrix: ${isIdentityMatrix(matrix2)}`);
