function checkCharacterPosition(inputString, specifiedCharacter) {
    if (inputString.length >= 4 && inputString.charAt(1) === specifiedCharacter) {
      return true;
    } else {
      return false;
    }
  }
  
  const testString = "Hello";
  const specifiedChar = "e";
  
  console.log(`Result: ${checkCharacterPosition(testString, specifiedChar)}`);
  