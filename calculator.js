function add(number1, number2) {
    return number1 + number2;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// const operations = ["add", "subtract", "multiply", "divide"];
// operations.forEach(function(operation) {
//     document.getElementById(operation).addEventListener("click", function() {
//         const number1 = parseFloat(document.getElementById('number1').value) || 0;
//         const number2 = parseFloat(document.getElementById('number2').value) || 0;
//         let result; // Changed from const to let, and removed initial assignment
        
//         switch (operation) {
//             case "add":
//                 result = add(number1, number2);
//                 break;
//             case "subtract":
//                 result = subtract(number1, number2);
//                 break;
//             case "multiply":
//                 result = multiply(number1, number2);
//                 break;
//            case "divide":
//                 result = number2 !== 0 ? divide(number1, number2) : "Cannot divide by zero";
//                 break;
//         }
//         document.getElementById('calculation-result').textContent = result;
//     });
// })

document.getElementById("add").addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById("subtract").addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});


document.getElementById("divide").addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});