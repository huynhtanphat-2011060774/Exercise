function changeCaseToMinimize(str) {
    const upperCaseCount = (str.match(/[A-Z]/g) || []).length;
    const lowerCaseCount = (str.match(/[a-z]/g) || []).length;

    return upperCaseCount <= lowerCaseCount ? str.toUpperCase() : str.toLowerCase();
}

const inputString1 = "Write";
const inputString2 = "PHp";

const result1 = changeCaseToMinimize(inputString1);
const result2 = changeCaseToMinimize(inputString2);

console.log(`Original String: ${inputString1}`);
console.log(`Modified String: ${result1}`);
console.log("\n");
console.log(`Original String: ${inputString2}`);
console.log(`Modified String: ${result2}`);
