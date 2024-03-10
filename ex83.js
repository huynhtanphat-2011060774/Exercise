const arrayOfStrings = ["apple", "banana", "kiwi", "grapefruit", "orange"];

let longestString = "";

for (const str of arrayOfStrings) {
    if (str.length > longestString.length) {
        longestString = str;
    }
}

console.log(`Longest String: ${longestString}`);
