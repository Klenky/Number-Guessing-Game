let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => { return Math.floor(Math.random() * 10)};

const compareGuesses = (userGuess, computerGuess, targetNum) => {
  const userDiff = Math.abs(targetNum - userGuess);
  const computerDiff = Math.abs(targetNum - computerGuess);
  if(userDiff <= computerDiff){
    return true;
  }else {return false;}
}

const updateScore = winner => {
  if(winner === 'human'){
    humanScore += 1;
  }else {computerScore++;}
}

const advanceRound = () => {currentRoundNumber++;}

console.log(compareGuesses(2, 1, 3));
console.log(humanScore);

