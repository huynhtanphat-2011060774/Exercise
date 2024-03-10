const inputString = "AbCdEfGh";

let isValid = true;

for (let i = 0; i < inputString.length - 1; i++) {
    const currentChar = inputString[i];
    const nextChar = inputString[i + 1];

    if (
        (currentChar >= 'a' && currentChar <= 'z' && nextChar >= 'a' && nextChar <= 'z') ||
        (currentChar >= 'A' && currentChar <= 'Z' && nextChar >= 'A' && nextChar <= 'Z')
    ) {
        isValid = false;
        break;
    }
}

console.log(`Is the string valid: ${isValid}`);
