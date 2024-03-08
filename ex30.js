function checkAndRemoveScript(inputString) {
    const scriptPosition = 4;
    const substringToCheck = "Script";
  
    if (inputString.length >= scriptPosition + substringToCheck.length &&
        inputString.substring(scriptPosition, scriptPosition + substringToCheck.length) === substringToCheck) {
      return inputString.slice(0, scriptPosition) + inputString.slice(scriptPosition + substringToCheck.length);
    } else {

      return inputString;
    }
  }
  
  const testString1 = "JavaScript";

  
  console.log(checkAndRemoveScript(testString1));
 
  