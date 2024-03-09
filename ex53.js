function areSeparatedByThreePlaces(inputString) {
    var pattern = /a.{3}b|b.{3}a/;

    return pattern.test(inputString);
}

var testString = "acccb";
if (areSeparatedByThreePlaces(testString)) {
    console.log("The characters 'a' and 'b' are separated by exactly 3 places.");
} else {
    console.log("The characters 'a' and 'b' are not separated by exactly 3 places.");
}
