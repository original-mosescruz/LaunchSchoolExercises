// Constants
const readline = require('readline-sync');

const VALID_CHOICES = {
  r : 'rock',
  p : 'paper',
  s : 'scissors',
  l : 'lizard',
  sp : 'spock'
};

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

const VALID_SHORTCUTS = Object.keys(VALID_CHOICES);
const TOURNAMENT_WINS = 3;
const TOURNAMENT_BEST_OF = 5;

// Globals
let userName;
let userWins = 0;
let computerWins = 0;

// Functions
const prompt = message => console.log(`=> ${message}`);

const invalidName = (name) => {
  if (name === '' || Number(name)) {
    return true;
  }
  return false;
};

const playerWins = (choice, computerChoice) => {
  return WINNING_COMBOS[choice].includes(computerChoice);
};

const getWinner = (choice, computerChoice) => {
  if (playerWins(choice, computerChoice)) {
    return userName;
  }
  if (choice === computerChoice) {
    return 'Tie';
  }
  return 'Computer';
};

const displayWinner = (winner, choice, computerChoice) => {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  switch (winner) {
    case userName: prompt(`${userName} wins!`);
      break;
    case 'Computer':  prompt(`Computer wins!`);
      break;
    default:
      prompt(`It's a tie!`);
  }
  prompt(`Your total wins: ${userWins}/${TOURNAMENT_WINS} vs Computer total wins: ${computerWins}/${TOURNAMENT_WINS}`);
};

const updateWinner = (winner) => {
  switch (winner) {
    case userName: userWins++;
      break;
    case 'Computer':  computerWins++;
      break;
    default:
      break;
  }
};

const grandWinnerExists = () => {
  return userWins === TOURNAMENT_WINS || computerWins === TOURNAMENT_WINS;
};

const updateScores = () => {
  userWins = 0;
  computerWins = 0;
};

const getAnswer = () => {
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

//MAIN
prompt("----- Welcome to Rock, Paper, Scissors, Lizard, Spock! -----");

prompt("What is your name?");
userName = readline.question();
if (invalidName(userName)) {
  userName = 'Player';
}

let playing = true;
while (playing) {

  prompt("Choose one of: ");
  for (const [shortcut, choice] of Object.entries(VALID_CHOICES)) {
    prompt(`${shortcut} for ${choice}`);
  }

  let shortcut = readline.question();

  while (VALID_CHOICES[shortcut] === undefined) {
    prompt("That's not a valid choice");
    shortcut = readline.question();
  }
  let choice = VALID_CHOICES[shortcut];

  let randomIndex = Math.floor(Math.random() * VALID_SHORTCUTS.length);
  let computerChoice = VALID_CHOICES[VALID_SHORTCUTS[randomIndex]];

  let winner = getWinner(choice, computerChoice);
  updateWinner(winner);
  displayWinner(winner, choice, computerChoice);

  if (grandWinnerExists()) {
    prompt(`${winner} wins the best of ${TOURNAMENT_BEST_OF}!`);
    updateScores();
  }

  prompt('Do you want to play again (y/n)?');
  let answer = getAnswer();
  if (answer !== 'y') {
    playing = false;
  }
}

console.log("----- Thanks for playing Rock, Paper, Scissors, Lizard, Spock! -----");