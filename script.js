const btns = document.querySelectorAll(".btn");
const reset = document.querySelector(".btn-reset");
const result = document.querySelector(".result");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

let playerRound = 0;
let computerRound = 0;
let isOver = false;

btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (isOver === false) {
			playRound(btn.textContent, getComputerChoice());
		}
	});
});

reset.addEventListener("click", () => {
	resetGame();
});

function getComputerChoice() {
	const choices = ["Rock", "Paper", "Scissors"];
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		result.textContent = "It's a tie!";
	} else if (
		(playerSelection === "Rock" && computerSelection === "Scissors") ||
		(playerSelection === "Paper" && computerSelection === "Rock") ||
		(playerSelection === "Scissors" && computerSelection === "Paper")
	) {
		result.textContent = "Player Wins!";
		playerRound += 1;
		playerScore.textContent = playerRound;
	} else {
		result.textContent = "Computer Wins";
		computerRound += 1;
		computerScore.textContent = computerRound;
	}

	winCheck();
}

function winCheck() {
	if (playerRound === 5 || computerRound === 5) {
		isOver = true;
		result.textContent = `It's over! ${playerRound === 5 ? "Player" : "Computer"} Wins!`;
	}
}

function resetGame() {
	playerRound = 0;
	result.textContent = "";
	playerScore.textContent = "0";
	computerScore.textContent = "0";
	computerRound = 0;
	isOver = false;
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
