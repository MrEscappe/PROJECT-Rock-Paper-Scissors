const btns = document.querySelectorAll(".btn");
const reset = document.querySelector(".btn-reset");
const result = document.querySelectorAll(".result");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const btnStart = document.querySelector(".btn-start");
const containerStart = document.querySelector(".container-start");
const containerGame = document.querySelector(".container-game");
const containerEnd = document.querySelector(".container-end");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");

btnStart.addEventListener("click", startGame);

let playerRound = 0;
let computerRound = 0;
let isOver = false;

btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (!isOver) {
			playerChoice.textContent = btn.textContent;
			playRound(btn.textContent, getComputerChoice());
		}
	});
});

reset.addEventListener("click", resetGame);

function startGame() {
	containerStart.style.display = "none";
	containerGame.style.display = "flex";
}

function getComputerChoice() {
	const choices = ["Rock", "Paper", "Scissors"];
	const randomIndex = Math.floor(Math.random() * choices.length);
	computerChoice.textContent = choices[randomIndex];
	return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		showResult("It's a tie!");
	} else if (
		(playerSelection === "Rock" && computerSelection === "Scissors") ||
		(playerSelection === "Paper" && computerSelection === "Rock") ||
		(playerSelection === "Scissors" && computerSelection === "Paper")
	) {
		showResult("Player Wins!");
		playerRound += 1;
		playerScore.textContent = playerRound;
	} else {
		showResult("Computer Wins!");
		computerRound += 1;
		computerScore.textContent = computerRound;
	}

	winCheck();
}

function winCheck() {
	if (playerRound === 5 || computerRound === 5) {
		isOver = true;
		containerGame.style.display = "none";
		containerEnd.style.display = "flex";
		showResult(`It's over! ${playerRound === 5 ? "Player" : "Computer"} Wins!`);
	}
}

function resetGame() {
	playerRound = 0;
	showResult("");
	playerScore.textContent = "0";
	computerScore.textContent = "0";
	computerRound = 0;
	isOver = false;
	containerEnd.style.display = "none";
	containerGame.style.display = "flex";
}

function showResult(string) {
	result.forEach((e) => {
		e.textContent = string;
	});
}

// function game() {
// 	let round = 0;

// 	while (round < 5) {
// 		let playerChoice = prompt("What is your choice?", "");
// 		if (playerChoice === "") {
// 			playerChoice = prompt("Please Enter Rock, Paper or Scissros");
// 		} else {
// 			playRound(capitalizeFirstLetter(playerChoice), getComputerChoice());
// 		}
// 		round++;
// 	}

// 	function capitalizeFirstLetter(string) {
// 		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// 	}

// 	function getComputerChoice() {
// 		let result = Math.floor(Math.random() * 3) + 1;

// 		if (result === 1) {
// 			return "Rock";
// 		} else if (result === 2) {
// 			return "Paper";
// 		} else {
// 			return "Scissors";
// 		}
// 	}

// 	function playRound(playerSelection, computerSelection) {
// 		if (playerSelection === computerSelection) {
// 			console.log("It's a tie!");
// 		} else if (
// 			(playerSelection === "Rock" && computerSelection === "Scissors") ||
// 			(playerSelection === "Paper" && computerSelection === "Rock") ||
// 			(playerSelection === "Scissors" && computerSelection === "Paper")
// 		) {
// 			console.log("Player Wins!");
// 		} else {
// 			console.log("Computer Wins");
// 		}
// 	}
// }

// game();
