function concatenateWithoutFirstChar(str1, str2) {
    if (str1.length > 0 && str2.length > 0) {
      const concatenatedString = str1.substring(1) + str2.substring(1);
      return concatenatedString;
    } else {
    
      return "Please provide two non-empty strings.";
    }
  }
  
  const firstString = "hello";
  const secondString = "world";
  const result = concatenateWithoutFirstChar(firstString, secondString);
  console.log(result);
  