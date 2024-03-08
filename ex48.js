function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

var originalString = "Hello, World";
var reversedString = reverseString(originalString);

console.log("Original String: " + originalString);
console.log("Reversed String: " + reversedString);
