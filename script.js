function getComputerChoice() {
	let result = Math.floor(Math.random() * 3) + 1;

	if (result === 1) {
		return "Rock";
	} else if (result === 2) {
		return "Paper";
	} else {
		return "Scissors";
	}
}

function playerSelection() {}

function computerSelection() {}
