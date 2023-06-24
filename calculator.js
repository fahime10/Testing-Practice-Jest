function calculator(op, num1, num2) {
    switch(op) {
        case "add": {
            return num1 + num2;
        }
        case "subtract": {
            return num1 - num2;
        }
        case "multiply": {
            return num1 * num2;
        }
        case "divide": {
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error, cannot divide by 0";
            }
        }
    }
}

module.exports = calculator;