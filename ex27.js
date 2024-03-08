function checkStringStartsWithJava(inputString) {
    if (inputString.startsWith('java')) {
      return 'The string starts with java';
    } else {
      return 'The string does not start with java';
    }
  }
  
  const testString1 = 'javascript';
  const testString2 = 'aaaaa';
  
  console.log(checkStringStartsWithJava(testString1));
  console.log(checkStringStartsWithJava(testString2));
  