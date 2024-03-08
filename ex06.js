function isLeapYear(year) {
    if (year % 4 !== 0) {
      return false;
    }
    
    if (year % 100 === 0 && year % 400 !== 0) {
      return false;
    }
  
    return true;
  }

  const yearToCheck = 2024; 
  if (isLeapYear(yearToCheck)) {
    console.log(`${yearToCheck} is a leap year.`);
  } else {
    console.log(`${yearToCheck} is not a leap year.`);
  }
  