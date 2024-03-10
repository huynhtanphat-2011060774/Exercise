const inputString = "hello";

const resultString = inputString.replace(/[a-z]/g, (char) => {
    if (char === 'z') {
        return 'a';
    } else if (char === 'Z') {
        return 'A';
    } else {
        return String.fromCharCode(char.charCodeAt(0) + 1);
    }
});

console.log(`Original String: ${inputString}`);
console.log(`Result String: ${resultString}`);
