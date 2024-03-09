function hasEqualNumberOfPsAndTs(inputString) {
    var countP = (inputString.match(/p/gi) || []).length;
    var countT = (inputString.match(/t/gi) || []).length;


    return countP === countT;
}


var testString = "Huynh Tan Phat";
if (hasEqualNumberOfPsAndTs(testString)) {
    console.log("The string has an equal number of 'p's and 't's.");
} else {
    console.log("The string does not have an equal number of 'p's and 't's.");
}
