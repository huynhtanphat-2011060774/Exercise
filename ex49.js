function replaceWithNextCharacter(inputString) {

    return inputString.split('').map(char => {

        if (/[a-zA-Z]/.test(char)) {
      
            const isUpperCase = char === char.toUpperCase();

            const nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
        
            return isUpperCase ? nextChar.toUpperCase() : nextChar.toLowerCase();
        } else {
            return char;
        }
    }).join('');
}

var originalString = "helloworld";
var modifiedString = replaceWithNextCharacter(originalString);

console.log("Original String: " + originalString);
console.log("Modified String: " + modifiedString);
