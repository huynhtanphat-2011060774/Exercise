function displayCityName(inputString) {
    if (inputString.startsWith("Los")) {
      return "Los Santos";
    } else if (inputString.startsWith("New")) {
      return "NewJersey";
    } else {
      return "";
    }
  }
  
  const cityName1 = displayCityName("Los Santos");
  const cityName2 = displayCityName("NewJersey");
  const cityName3 = displayCityName("Miami");
  console.log(cityName1);
  console.log(cityName2);
  console.log(cityName3);
  