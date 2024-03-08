function checkValuesFor15(num1, num2) {
    if (num1 === 15 || num2 === 15) {
        return true;
    }


    if (num1 + num2 === 15 || Math.abs(num1 - num2) === 15) {
        return true;
    }

    return false;
}

var value1 = 10;
var value2 = 5;

if (checkValuesFor15(value1, value2)) {
    console.log("One of the values is 15 or their sum/difference is 15");
} else {
    console.log("Neither of the conditions is met.");
}
