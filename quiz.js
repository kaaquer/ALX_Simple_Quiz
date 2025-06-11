function checkAnswer() {
    const correctAnswer = "4"; // The correct answer for the quiz
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        document.getElementById("feedback").style.color = "red";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);

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