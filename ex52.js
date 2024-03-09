function alphabetizeString(inputString) {
    // Convert the string to an array of characters, sort them alphabetically, and join them back into a string
    return inputString.split('').sort().join('');
}

// Example usage:
var originalString = "tanphat";
var alphabetizedString = alphabetizeString(originalString);

console.log("Original String: " + originalString);
console.log("Alphabetized String: " + alphabetizedString);
