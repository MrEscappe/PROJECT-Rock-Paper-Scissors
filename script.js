function game() {
	let round = 0;

	while (round < 5) {
		let playerChoice = prompt("What is your choice?", "");
		if (playerChoice === "") {
			playerChoice = prompt("Please Enter Rock, Paper or Scissros");
		} else {
			playRound(capitalizeFirstLetter(playerChoice), getComputerChoice());
		}
		round++;
	}

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	}

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

	function playRound(playerSelection, computerSelection) {
		if (playerSelection === computerSelection) {
			console.log("It's a tie!");
		} else if (
			(playerSelection === "Rock" && computerSelection === "Scissors") ||
			(playerSelection === "Paper" && computerSelection === "Rock") ||
			(playerSelection === "Scissors" && computerSelection === "Paper")
		) {
			console.log("Player Wins!");
		} else {
			console.log("Computer Wins");
		}
	}
}

game();
