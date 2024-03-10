function shortestPalindrome(s) {
    const reversed = s.split('').reverse().join('');
    const len = s.length;

    for (let i = 0; i < len; i++) {
        if (s.substr(0, len - i) === reversed.substr(i)) {
            return s + reversed.substr(0, i);
        }
    }

    return s + reversed.substr(1);
}

const inputString = "helloworld";
const result = shortestPalindrome(inputString);

console.log(`Shortest possible palindrome: ${result}`);
