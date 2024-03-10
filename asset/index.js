 
 
 const getComputerChoice = function(){
     // create variables 
    const randomWords = [
     'Rock',
     'Paper',
     'Scissors'
    ]
    const randomStrings = randomWords[Math.floor(Math.random() * randomWords.length)];
    return randomStrings;
   // console.log(randomStrings);
 };
 getComputerChoice();
 
// creating another function
// Function to get the computer's choice

// Function to play one round of the game
const playRoundOne = function(playerSelection,computerSelection) {

  let playerPoint = 0;
  // const playerSelection = prompt("What is your choice, rock, paper, or scissors?");
  // const computerSelection = getComputerChoice(); // Get the computer's choice

  // Determine the winner
  if (
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log("You win!");
    playerScore = 1;
  } else if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else {
    console.log("You lose!");
  }
  return playerPoint;
};

// Start the game
playRoundOne();


// creating another function
const game = function(roundsTotal = 5){
   // best of five game
  let roundsPlayed = 0;
  let playerScore = 0;

  while (roundsPlayed < roundsTotal){
    let playerSelection = prompt('rock, paper,scissor');
    playerSelection = playerSelection.toLowerCase();
  
        if ((playerSelection != 'rock') &&
            (playerSelection != 'paper') &&
            (playerSelection != 'scissors'))
        { continue }

        let computerSelection = computerPlay()
        if (playerSelection == computerSelection) {
            console.log('It\'s a tie. You both chose ' + playerSelection)
            continue
        }

        playerScore += playRound(playerSelection, computerSelection)
        roundsPlayed++
    }

    if (playerScore > (roundsPlayed / 2)) {
        console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You win!')
    }
    else if (playerScore == (roundsPlayed / 2)) {
        console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You tied.')
    }
    else {
        console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You lost!')
    }
  }
   

   



}