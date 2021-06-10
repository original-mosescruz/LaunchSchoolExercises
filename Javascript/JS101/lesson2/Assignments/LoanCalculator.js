//globals / constants
const readline = require('readline-sync');
const MESSAGES = require('./loan_messages.json');
const MONTHS = 12;

// Functions
function prompt(message) {
  console.log(`=> ${message}`);
}

const emptyOrNaN = input => {
  let numInput = Number(input);

  if (input === '' || Number.isNaN(numInput)) {
    return true;
  }
  return false;
};

const invalidInputNumber = input => {
  if (emptyOrNaN(input) || input < 0) {
    return true;
  }
  return false;
};

const invalidInputInterestRate = input => {
  if (emptyOrNaN(input)) {
    return true;
  }
  let re = new RegExp('^0?.0*[1-9]+');
  let match = re.test(Number(input));
  if (!match) {
    return true;
  }
  return false;
};


const getAmount = type => {
  let amount = readline.question();

  if (type === 'loan' || type === 'duration') {
    while (invalidInputNumber(amount)) {
      prompt(MESSAGES.validation.invalidNumber);
      amount = readline.question();
    }
  } else {
    while (invalidInputInterestRate(amount)) {
      prompt(MESSAGES.validation.invalidInterestRate);
      amount = readline.question();
    }
  }
  return Number(amount);
};

const askQuestions = () => {
  prompt(MESSAGES.prompts.loanAmount);
  let loanAmount = getAmount("loan");

  prompt(MESSAGES.prompts.interestRate);
  let interestRate = (getAmount("interest")) / MONTHS;

  prompt(MESSAGES.prompts.loanDuration);
  let loanDuration = getAmount("duration");

  return [loanAmount, interestRate, loanDuration];
};

// MAIN
prompt(MESSAGES.intro_outro.intro);
let anotherCalculation = true;
while (anotherCalculation) {
  prompt('-----------------------');
  let [loanAmount, monthlyInterest, loanDuration] = askQuestions();
  let monthlyPayment = loanAmount * 
                       (monthlyInterest / 
                       (1 - Math.pow((1 + monthlyInterest), (-loanDuration))));
  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  prompt("Another calculation?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt(MESSAGES.validation.incorrectResponse);
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') {
    anotherCalculation = false;
    prompt(MESSAGES.intro_outro.outro);
  }
}


