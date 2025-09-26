const leapYears = function (year) {
  // let isLeapYear = false

  // Nested conditional approach
  // if (year % 4 === 0) {
  //     if (year % 100 === 0 && year % 400 !== 0) {
  //         return isLeapYear
  //     }
  //     isLeapYear = true
  // }

  // return isLeapYear

  // Single conditional approach
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }

  return false;
};

// Do not edit below this line
module.exports = leapYears;
