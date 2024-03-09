function countVowels(inputString) {
    var vowelCount = (inputString.match(/[aeiou]/gi) || []).length;

    return vowelCount;
}

var testString = "hello world";
var numberOfVowels = countVowels(testString);

console.log("Original String: " + testString);
console.log("Number of Vowels: " + numberOfVowels);
