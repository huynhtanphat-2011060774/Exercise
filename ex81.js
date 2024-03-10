const positiveInteger = 47;

if (positiveInteger >= 10 && positiveInteger < 100) {
    const firstDigit = Math.floor(positiveInteger / 10);
    const secondDigit = positiveInteger % 10;

    const sum = firstDigit + secondDigit;

    console.log(`Original Integer: ${positiveInteger}`);
    console.log(`Sum of Digits: ${sum}`);
} else {
    console.log("The positive integer must be of length two.");
}
