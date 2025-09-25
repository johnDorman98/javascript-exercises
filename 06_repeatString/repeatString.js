const repeatString = function(stringToRepeat, repeatCount) {
    let repeatedString = ""

    if (repeatCount < 0) {
      return "ERROR"
    }

    if (!stringToRepeat) {
      return repeatedString;
    }
    
    for (let i = 0; i < repeatCount; i++) {
      repeatedString = repeatedString + stringToRepeat
    }

    return repeatedString
};

repeatString("hey", 3)

// Do not edit below this line
module.exports = repeatString;
