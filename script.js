let currentNumber = 0;
let nextNumber = 0;
let isGameRunning = false;
let points = 0
let highScore = 0


const currentNumberDisplay = document.getElementById("current-number");
const output = document.getElementById("output");
const higherButton = document.getElementById("higher-btn");
const lowerButton = document.getElementById("lower-btn");
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");
const pointsDisplay = document.getElementById("points");
const highScoreDisplay = document.getElementById("highScore")


function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function startGame() {
    currentNumber = getRandomNumber();
    isGameRunning = true;
    startButton.disabled = true;
    higherButton.disabled = false;
    lowerButton.disabled = false;
    displayCurrentNumber();
}

function resetGame() {
    currentNumber = 0;
    nextNumber = 0;
    points = 0;
    isGameRunning = false;
    currentNumberDisplay.textContent = "0";
    pointsDisplay.textContent = "0";
    output.textContent = "";
    startButton.disabled = false;
    higherButton.disabled = true;
    lowerButton.disabled = true;
}

function displayCurrentNumber() {
    currentNumberDisplay.textContent = currentNumber;
}

function displayPoints() {
    pointsDisplay.textContent = points;
}

function checkGuess(isHigher) {
    nextNumber = getRandomNumber();
    displayCurrentNumber();
    newPoints = points + 1;
    displayPoints();
    if ((isHigher && nextNumber > currentNumber) || (!isHigher && nextNumber < currentNumber)) {
        currentNumber = nextNumber;
        displayCurrentNumber();
        points = newPoints
        displayPoints()
        if (newPoints > highScore) {
            highScore = newPoints
            highScoreDisplay.textContent = newPoints
        }

    } else {
        currentNumber = nextNumber;
        displayCurrentNumber();
        isGameRunning = false;
        output.textContent = "Game Over! You guessed wrong.";
        startButton.disabled = false;
        higherButton.disabled = true;
        lowerButton.disabled = true;
    }
}

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);
higherButton.addEventListener("click", () => checkGuess(true));
lowerButton.addEventListener("click", () => checkGuess(false));

resetGame();