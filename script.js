const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('seasor');
const resultDisplay = document.getElementById('result');
const resetbutton= document.getElementById("reset")




rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));




// function playRound(playerChoice) {
//     const choices = ['rock', 'paper', 'scissors'];
//     const computerChoice = choices[Math.floor(Math.random() * choices.length)];
   
//     // Determine the winner and update the resultDisplay with the outcome
//     if (playerChoice === computerChoice) {
//         resultDisplay.textContent = 'It\'s a draw!';
//     } else if (
//         (playerChoice === 'rock' && computerChoice === 'scissors') ||
//         (playerChoice === 'paper' && computerChoice === 'rock') ||
//         (playerChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//         resultDisplay.textContent = 'You win!';
//     } else {
//         resultDisplay.textContent = 'Computer wins!';
//     }
//   }

  let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');


let turn=1;
while (turn!=5){
function playRound(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    if (playerChoice === computerChoice) {
        resultDisplay.textContent = 'It\'s a draw!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDisplay.textContent = 'You win!';
        playerScore++; // Increment player's score
    } else {
        resultDisplay.textContent = 'Computer wins!';
        computerScore++; // Increment computer's score
    }
  
    // Update the score display
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
  }
  resetbutton.addEventListener("click",()=>{
    playerScoreDisplay.textContent=`Player Score: ${0}`
    computerScoreDisplay.textContent=`Computer Score: ${0}`
    resultDisplay.textContent="your turn first"
  })
turn++;

}