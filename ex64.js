function concatenateAndTrim(str1, str2) {

    if (str1.length === str2.length) {
      return str1 + str2;
    } else {

      const minLength = Math.min(str1.length, str2.length);
      const trimmedStr1 = str1.substring(0, minLength);
      const trimmedStr2 = str2.substring(0, minLength);

      return trimmedStr1 + trimmedStr2;
    }
  }
  
  const string1 = "Hello";
  const string2 = "World!";
  const result = concatenateAndTrim(string1, string2);
  console.log(result);
  