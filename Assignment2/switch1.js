function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

console.log(calculate(10, 5, '+'));
console.log(calculate(10, 5, '/')); 
console.log(calculate(10, 5, '*')); 
console.log(calculate(10, 5, '-')); 

