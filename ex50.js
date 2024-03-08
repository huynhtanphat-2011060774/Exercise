function capitalizeEachWord(inputString) {

    return inputString.replace(/\b\w/g, char => char.toUpperCase());
}
var originalString = "xin chao the gioi";
var capitalizedString = capitalizeEachWord(originalString);

console.log("Original String: " + originalString);
console.log("Capitalized String: " + capitalizedString);
