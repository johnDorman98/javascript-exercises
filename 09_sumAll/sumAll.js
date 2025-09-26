const sumAll = function (num1, num2) {
  // Only allow integers
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR"
  }
  
  // Ensure positive number is given
  if (num1 < 0 || num2 < 0) {
    return "ERROR"
  }
  
  // Swap num1 and num2 when num1 > num2
  if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }
  
  let sum = 0;

  // Add each number in the range of num1 and num2 to sum.
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
