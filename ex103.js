const positiveInteger = 528413;

const numStr = positiveInteger.toString();
let maxNumber = -1;

for (let i = 0; i < numStr.length; i++) {
    const modifiedNumStr = numStr.slice(0, i) + numStr.slice(i + 1);
    const modifiedNum = parseInt(modifiedNumStr, 10);
    
    if (modifiedNum > maxNumber) {
        maxNumber = modifiedNum;
    }
}

console.log(`Maximum number after deleting one digit: ${maxNumber}`);
