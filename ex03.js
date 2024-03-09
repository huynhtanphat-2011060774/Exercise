function getCurrentDate() {
    const currentDate = new Date();
  
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const year = currentDate.getFullYear();
  
    const formatDate1 = `${month}-${day}-${year}`;
    const formatDate2 = `${month}/${day}/${year}`;
    const formatDate3 = `${day}-${month}-${year}`;
    const formatDate4 = `${day}/${month}/${year}`;
  
    console.log(`mm-dd-yyyy: ${formatDate1}`);
    console.log(`mm/dd/yyyy: ${formatDate2}`);
    console.log(`dd-mm-yyyy: ${formatDate3}`);
    console.log(`dd/mm/yyyy: ${formatDate4}`);
  }
  
  getCurrentDate();
  