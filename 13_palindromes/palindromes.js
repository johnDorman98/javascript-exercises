const palindromes = function (string) {
  // Convert to lowercase and remove special characters.
  string = string.replace(/[\W_]+/g, "").toLowerCase();

  // Store reversed string
  let reversedString = string.split("").reverse().join("");

  return string === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
