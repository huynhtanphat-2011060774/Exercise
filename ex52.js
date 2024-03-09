function alphabetizeString(inputString) {

    return inputString.split('').sort().join('');
}


var originalString = "tanphat";
var alphabetizedString = alphabetizeString(originalString);

console.log("Original String: " + originalString);
console.log("Alphabetized String: " + alphabetizedString);
