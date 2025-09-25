const removeFromArray = function(arr, elementToRemove) {
    updatedArr = []   

    arr.forEach(element => {
        if (element !== elementToRemove) {
          updatedArr.push(element)
        }
    });

    return updatedArr
};

// Do not edit below this line
module.exports = removeFromArray;
