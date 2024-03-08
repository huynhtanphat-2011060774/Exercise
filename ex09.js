function daysUntilChristmas() {

    const currentDate = new Date();
  
    const currentYear = currentDate.getFullYear();

    const christmasDate = new Date(currentYear, 11, 25); // Month is 0-based in JavaScript Date objects
  
    if (currentDate > christmasDate) {
      christmasDate.setFullYear(currentYear + 1);
    }
  
    const timeDifference = christmasDate.getTime() - currentDate.getTime();
  
  
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysLeft;
  }
  
  const daysLeftUntilChristmas = daysUntilChristmas();
  console.log(`There are ${daysLeftUntilChristmas} days left until Christmas.`);
  