/*
 Requirements: 
  Ask the user for the first number.
  Ask the user for the second number.
  Ask the user for an operation to perform.
  Perform the operation on the two numbers.
  Print the result to the terminal.

  Ask User if they want to perform another calculation
  Repeat bbove steps if yes
*/

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json')

/*
 function declarations
*/



function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getValidNum () {
  let num = readline.question();

  while (invalidNumber(num)) {
    prompt(json.prompts.firstNum);
    num = readline.question();
  }
  return num;
}

function getValidOperation () {
  let operation = readline.question();
  
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(json.validation.incorrectOperation);
    operation = readline.question();
  }
  return operation;
}

function getValidAnswer() {
  let answer = readline.question().toLowerCase();
  
  while (!['y', 'yes', 'no', 'n'].includes(answer)) {
    prompt(json.validation.incorrectResponse);
    answer = readline.question().toLowerCase();
  }
  if(answer == 'no' || answer == 'n') {
    performCalculations = false;
  }
  return answer;
}

function askQuestions() {
  prompt(MESSAGES.prompts.firstNum);
  let number1 = getValidNum();

  prompt(MESSAGES.prompts.secondNum);
  let number2 = getValidNum();

  prompt(MESSAGES.prompts.operation);

  let operation = getValidOperation();
  return [number1, number2, operation];
}

function performOperation(number1, number2, operation) {
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  console.log(`The result is: ${output}`);
}

/*
 main code
*/


let performCalculations = true;

prompt(MESSAGES.intro_outro.intro);

while(performCalculations) {
  let [number1, number2, operation] = askQuestions();
  performOperation(number1, number2, operation);

  //continue?
  prompt(MESSAGES.prompts.continue);
  let answer = getValidAnswer();
}

console.log(MESSAGES.intro_outro.outro)
