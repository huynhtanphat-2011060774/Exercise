function replaceHash(str) {
    const result = [];

    for (let i = 0; i <= 9; i++) {
        const replacedStr = str.replace("#", i);
        if (parseInt(replacedStr) % 3 === 0) {
            result.push(replacedStr);
        }
    }

    return result;
}

const inputString = "2#0";
const possibleOptions = replaceHash(inputString);

console.log(`Possible options: ${JSON.stringify(possibleOptions)}`);
