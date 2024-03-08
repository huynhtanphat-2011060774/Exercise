function checkNumbers(num1, num2, num3) {
    if ((num1 >= 20 && num1 < num2 && num1 < num3) ||
        (num2 >= 20 && num2 < num1 && num2 < num3) ||
        (num3 >= 20 && num3 < num1 && num3 < num2)) {
        return true;
    } else {
        return false;
    }
}
var number1 = 15;
var number2 = 25;
var number3 = 30;
if (checkNumbers(number1, number2, number3)) {
    console.log("One of the numbers is greater than or equal to 20 and less than the others.");
} else {
    console.log("No number is greater than or equal to 20 and less than the others.");
}
