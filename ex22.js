function removeCharacterAtPosition(inputString, position) {
    if (position < 0 || position >= inputString.length) {
      return "Invalid position";
    }
  
    const modifiedString = inputString.slice(0, position) + inputString.slice(position + 1);
    return modifiedString;
  }
  
  const originalString = "huynhtanphat";
  const positionToRemove = 5;
  const modifiedString = removeCharacterAtPosition(originalString, positionToRemove);
  
  console.log(`Original String: ${originalString}`);
  console.log(`Modified String: ${modifiedString}`);
  