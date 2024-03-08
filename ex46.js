function checkMultiplesOf7Or11(num1, num2) {
    var isNum1MultipleOf7 = num1 % 7 === 0;
    var isNum1MultipleOf11 = num1 % 11 === 0;

    var isNum2MultipleOf7 = num2 % 7 === 0;
    var isNum2MultipleOf11 = num2 % 11 === 0;

    return (
        (isNum1MultipleOf7 || isNum1MultipleOf11) && !(isNum1MultipleOf7 && isNum1MultipleOf11) ||
        (isNum2MultipleOf7 || isNum2MultipleOf11) && !(isNum2MultipleOf7 && isNum2MultipleOf11)
    );
}
var number1 = 14;
var number2 = 22;

if (checkMultiplesOf7Or11(number1, number2)) {
    console.log("One (not both) of the numbers is a multiple of 7 or 11.");
} else {
    console.log("Neither of the numbers is a multiple of 7 or 11, or both are multiples.");
}
