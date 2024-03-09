function hasEqualNumberOfPsAndTs(inputString) {
    // Count the number of 'p's and 't's in the string
    var countP = (inputString.match(/p/gi) || []).length;
    var countT = (inputString.match(/t/gi) || []).length;

    // Check if the counts are equal
    return countP === countT;
}


var testString = "Huynh Tan Phat";
if (hasEqualNumberOfPsAndTs(testString)) {
    console.log("The string has an equal number of 'p's and 't's.");
} else {
    console.log("The string does not have an equal number of 'p's and 't's.");
}
