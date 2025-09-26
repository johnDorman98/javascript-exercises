const removeFromArray = function(arr, ...elementsToRemove) {
  // Loop based approach
  // updatedArr = []   
    
    // arr.forEach(element => {
    //     if (!elementsToRemove.includes(element)) {
    //       updatedArr.push(element)
    //     }
    // });

    // return updatedArr

    // Filter based approach
    return arr.filter(element => !elementsToRemove.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;
