const givenInteger = 123456;

const digitString = givenInteger.toString();
let isIncreasing = true;

for (let i = 0; i < digitString.length - 1; i++) {
    if (parseInt(digitString[i]) >= parseInt(digitString[i + 1])) {
        isIncreasing = false;
        break;
    }
}

if (isIncreasing) {
    console.log(`${givenInteger} has an increasing digit sequence.`);
} else {
    console.log(`${givenInteger} does not have an increasing digit sequence.`);
}
