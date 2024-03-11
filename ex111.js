const num1 = 5;
const num2 = 7;
const num3 = 5;

let result;

if (num1 === num2 && num2 !== num3) {
    result = num3;
} else if (num1 === num3 && num2 !== num3) {
    result = num2;
} else if (num2 === num3 && num1 !== num3) {
    result = num1;
} else {
    console.log("No two numbers are equal.");
}

if (result !== undefined) {
    console.log(`The third number is: ${result}`);
}
