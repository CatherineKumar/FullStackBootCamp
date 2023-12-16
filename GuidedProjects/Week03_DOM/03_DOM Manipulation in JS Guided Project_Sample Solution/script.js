// Initialize variables to track the current question, score, and the number of questions.
var currentQuestion = 0;
var score = 0;
var numOfQuestions = questions.length; // Assumes questions is an array of question objects.
var numOfChoices = 3; // Number of choices per question.
var questionCountElement = document.getElementById("question-count");

// Function to display the current question and choices.
function displayQuestion() {
    var questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestion].question;
    questionCountElement.textContent = currentQuestion + 1 + " of " + numOfQuestions + " questions";
    
    // Loop through choices and update choice buttons.
    for (var i = 0; i < numOfChoices; i++) {
        var choiceButton = document.getElementsByClassName("choice")[i];
        choiceButton.textContent = questions[currentQuestion].choices[i];
    }
}

// Function to check the user's answer and update the score.
function checkAnswer(choiceIndex) {
    if (choiceIndex === questions[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;
    questionCountElement.textContent = currentQuestion + 1;

    // Check if there are more questions, and either display the next question or end the quiz.
    if (currentQuestion < numOfQuestions) {
        displayQuestion();
    } else {
        endQuiz();
    }

    // Update the score display.
    updateScore();
}

// Function to update the score display.
function updateScore() {
    var scoreElement = document.getElementById("score");
    
    if (currentQuestion == numOfQuestions) {
        // Display final score when the quiz is complete.
        scoreElement.textContent = "Final Score: " + score + " / " + numOfQuestions;
    }
    else {
        // Display the current score during the quiz.
        scoreElement.textContent = "Current Score: " + score;
    }
    
    console.log(score); // Log the score for debugging if needed.
}

// Function to end the quiz and display a completion message.
function endQuiz() {
    var questionContainer = document.getElementById("question-container");
    var choicesContainer = document.getElementById("choices-container");
    questionCountElement.textContent = "";
    questionContainer.innerHTML = "<p>Quiz completed!</p>";
    choicesContainer.innerHTML = "";
}

// Function to restart the quiz by resetting variables and reinitializing the display.
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    updateScore();
    
    // Reset the question and choices elements.
    document.getElementById("question-container").innerHTML = '<p id="question"></p>';
    document.getElementById("choices-container").innerHTML = '<button class="choice" onclick="checkAnswer(0)"></button>' +
        '<button class="choice" onclick="checkAnswer(1)"></button>' +
        '<button class="choice" onclick="checkAnswer(2)"></button>';
    
    // Display the first question to restart the quiz.
    displayQuestion();
}

// Start the quiz by displaying the first question.
displayQuestion();