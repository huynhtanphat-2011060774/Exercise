const givenNumber = 25;
let trailingZerosCount = 0;

for (let i = 5; givenNumber / i >= 1; i *= 5) {
    trailingZerosCount += Math.floor(givenNumber / i);
}

console.log(`Number of trailing zeros in ${givenNumber} factorial: ${trailingZerosCount}`);
