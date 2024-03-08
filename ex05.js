function rotateStringRight(inputString) {

    const charArray = inputString.split('');
  
   
    const rotatedString = charArray.pop() + charArray.join('');
  
    return rotatedString;
  }
  

  const originalString = 'w3resource';

  const rotatedString = rotateStringRight(originalString);
  console.log(`Original String: ${originalString}`);
  console.log(`Rotated String: ${rotatedString}`);
  