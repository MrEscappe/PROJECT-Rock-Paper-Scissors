function playRound(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return "Tie!";
	} else if (playerChoice === "rock" && computerChoice === "paper") {
		return "You lose! Paper beats rock.";
	} else if (playerChoice === "paper" && computerChoice === "rock") {
		return "You win! Paper beats rock.";
	} else if (playerChoice === "rock" && computerChoice === "scissors") {
		return "You win! Rock beats scissors.";
	} else if (playerChoice === "scissors" && computerChoice === "rock") {
		return "You lose! Rock beats scissors.";
	} else if (playerChoice === "paper" && computerChoice === "scissors") {
		return "You lose! Scissors beats paper.";
	} else if (playerChoice === "scissors" && computerChoice === "paper") {
		return "You win! Scissors beats paper.";
	} else {
		return "Invalid input.";
	}
}

function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomNumber = Math.floor(Math.random() * 3);

	return choices[randomNumber];
}

function playGame() {
	let playerScore = 0;
	let computerScore = 0;

	while (playerScore < 5 && computerScore < 5) {
		const playerChoice = "rock";
		const computerChoice = getComputerChoice();
		const result = playRound(playerChoice, computerChoice);

		if (result === "Invalid input.") {
			console.log("Invalid input. Please enter rock, paper, or scissors.");
			continue;
		}

		if (result.startsWith("You win!")) {
			playerScore++;
		} else if (result.startsWith("You lose!")) {
			computerScore++;
		}

		console.log(`Player: ${playerChoice}`);
		console.log(`Player Score: ${playerScore}`);
		console.log(`Computer: ${computerChoice}`);
		console.log(`Computer Score: ${computerScore}`);
		console.log(result);
	}

	if (playerScore > computerScore) {
		console.log("You win the game!");
	} else {
		console.log("You lose the game.");
	}
}

playGame();
