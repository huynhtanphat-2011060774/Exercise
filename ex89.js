function isExpressionPossible(x, y, z) {
    return (
        x + y === z ||
        x - y === z ||
        x * y === z ||
        x / y === z
    );
}

const x = 10;
const y = 30;
const z = 300;

const result = isExpressionPossible(x, y, z);

console.log(`Is it possible: ${result}`);
