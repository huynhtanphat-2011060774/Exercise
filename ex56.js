function divideAndFormatWithCommas(dividend, divisor) {
    if (divisor === 0) {
        return "Error: Cannot divide by zero.";
    }

    var result = dividend / divisor;


    var formattedResult = result.toLocaleString('en-US');

    return formattedResult;
}

var dividend = 1000000;
var divisor = 25;

var resultString = divideAndFormatWithCommas(dividend, divisor);
console.log("Result of division: " + resultString);
