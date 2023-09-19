document.addEventListener("DOMContentLoaded", function() {
  // Check if the HTML lang attribute is set to Arabic
  if (document.documentElement.lang.toLowerCase() === 'ar') {
    // Get all elements with the attribute "rf-arabic-date" set to "date"
    const elements = document.querySelectorAll('[rf-arabic-date="date"]');
    
    // Loop through the elements and convert the date format
    elements.forEach(element => {
      const dateStr = element.textContent;
      const dateParts = dateStr.split(" ");
      const month = dateParts[0];
      const day = dateParts[1].replace(",", "");
      const year = dateParts[2];
      
      // Convert the month name to Arabic
      const monthArabic = convertMonthToArabic(month);
      
      // Convert the day and year to Arabic numerals
      const dayArabic = convertNumberToArabic(day);
      const yearArabic = convertNumberToArabic(year);
      
      // Update the element's text content with the Arabic date format
      element.textContent = `${dayArabic} ${monthArabic}, ${yearArabic}`;
    });
  }
});

function convertMonthToArabic(monthName) {
  // Define the month names in Arabic
  const monthNames = {
    "Jan": "يناير",
    "Feb": "فبراير",
    "Mar": "مارس",
    "Apr": "أبريل",
    "May": "مايو",
    "Jun": "يونيو",
    "Jul": "يوليو",
    "Aug": "أغسطس",
    "Sep": "سبتمبر",
    "Oct": "أكتوبر",
    "Nov": "نوفمبر",
    "Dec": "ديسمبر"
  };
  
  // Return the Arabic month name for the given English month name
  return monthNames[monthName];
}

function convertNumberToArabic(number) {
  // Define the Arabic numerals
  const numerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  
  // Convert each digit of the number to Arabic numeral and join them
  const arabicNumber = number
    .split("")
    .map(digit => numerals[digit])
    .join("");
    
  // Return the Arabic numeral string
  return arabicNumber;
}
