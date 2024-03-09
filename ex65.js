function endsWithScript(inputString) {
    if (inputString.length >= 6) {
      const isEndingWithScript = inputString.endsWith("Script");
      return isEndingWithScript;
    } else {
      return "Please provide a string with a length of six or more characters.";
    }
  }
  
  const testString1 = "JavaScript";
  const testString2 = "TypeScript";
  const result1 = endsWithScript(testString1);
  const result2 = endsWithScript(testString2);
  
  console.log(`${testString1} ends with 'Script': ${result1}`);
  console.log(`${testString2} ends with 'Script': ${result2}`);
  