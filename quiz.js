function checkAnswer(selectedValue, correctValue) {
    if (selectedValue === correctValue) {

        document.getElementById("feedback").innerHTML = "Correct! Well done.";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").innerHTML = "That's incorrect. Try again!.";
        document.getElementById("feedback").style.color = "red";
    }
}

document.getElementById("submit-answer").addEventListener("click", function() {
    const correctAnswer = "4"; // The correct answer for the quiz
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    if (userAnswer) {
        checkAnswer(userAnswer, correctAnswer);
    } else {
        document.getElementById("feedback").innerHTML = "Please select an answer.";
        document.getElementById("feedback").style.color = "orange";
    }
})

function sum(a, b){
    return a + b
}
function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}
function divide(a, b){
    return a / b
}