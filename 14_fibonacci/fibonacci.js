const fibonacci = function(number) {
    // Iterative approach using an array to build the fibonachi numbers.
    // if (!Number.isInteger(number)) {
    //     number = Number(number)
    // }

    // if (number == 0) {
    //     return 0
    // }

    // if (number < 0) {
    //     return "OOPS"
    // }
    
    // const fibonacciNumbers = [0, 1]

    // for (let i = 2; i <= number; i++) {        
    //     fibonacciNumbers[i] = fibonacciNumbers[i-1] + fibonacciNumbers[i-2]        
    // }

    // return fibonacciNumbers[number]

    // Recursive approach.
    if (number == 0) {
        return 0
    }

    if (number == 1) {
        return 1
    }

    if (number < 0) {
        return "OOPS"
    }

    return fibonacci(number-1) + fibonacci(number-2)
};

// Do not edit below this line
module.exports = fibonacci;
