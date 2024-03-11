function sumOfDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

function numberOfReplacementsToSingleDigit(num) {
    let replacements = 0;

    while (num >= 10) {
        num = sumOfDigits(num);
        replacements++;
    }

    return replacements;
}

const givenNumber = 9875;
const replacementsCount = numberOfReplacementsToSingleDigit(givenNumber);

console.log(`Number of replacements to a single-digit number: ${replacementsCount}`);
