const choices = document.querySelectorAll(".choice");
const resultText = document.querySelector(".result-text");
const announceText = document.querySelector(".announce-text");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const resetBtn = document.querySelector(".restart");

let playerPoints = 0;
let computerPoints = 0;
let isAlive = true;

choices.forEach((choice) => {
	choice.addEventListener("click", () => {
		const playerChoice = choice.textContent;
		const computerChoice = computerPlay();
		const result = getResult(playerChoice, computerChoice);
		updateScore(result);
		updateResult(result, playerChoice, computerChoice);
		checkGameOver();
	});
});

function computerPlay() {
	const choices = ["✊", "✋", "✌️"];
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

function getResult(playerChoice, computerChoice) {
	if (!isAlive) return;
	if (playerChoice === computerChoice) {
		return "draw";
	} else if (
		(playerChoice === "✊" && computerChoice === "✌️") ||
		(playerChoice === "✋" && computerChoice === "✊") ||
		(playerChoice === "✌️" && computerChoice === "✋")
	) {
		return "player";
	} else {
		return "computer";
	}
}

function updateScore(result) {
	if (!isAlive) return;
	if (result === "player") {
		playerPoints++;
		playerScore.textContent = playerPoints;
	} else if (result === "computer") {
		computerPoints++;
		computerScore.textContent = computerPoints;
	}
}

function updateResult(result, playerChoice, computerChoice) {
	if (!isAlive) return;
	if (result === "draw") {
		resultText.textContent = "🤝";
		announceText.textContent = "Draw! Try again!";
	} else if (result === "player") {
		resultText.textContent = playerChoice;
		announceText.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
	} else {
		resultText.textContent = computerChoice;
		announceText.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
	}
}

function checkGameOver() {
	if (playerPoints === 5 || computerPoints === 5) {
		isAlive = false;
		if (playerPoints === 5) {
			announceText.textContent = "You win the game!";
		} else {
			announceText.textContent = "You lose the game!";
		}
	}
}

resetBtn.addEventListener("click", () => {
	playerPoints = 0;
	computerPoints = 0;
	playerScore.textContent = playerPoints;
	computerScore.textContent = computerPoints;
	resultText.textContent = "✊";
	announceText.textContent = "Let's Play!";
	isAlive = true;
});
