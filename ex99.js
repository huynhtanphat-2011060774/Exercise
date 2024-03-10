function canRearrangeToEqual(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

const string1 = "listen";
const string2 = "silent";

const result = canRearrangeToEqual(string1, string2);

console.log(`Is it possible to rearrange the characters: ${result}`);
