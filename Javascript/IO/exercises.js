/*
 Let's use readline-sync to write a program that displays a personalized greeting message for the user based on the name she provides. 
 Create a file named personalized_greeting.js with the following code:

 to get this working:
 npm init -y
 npm install readline-sync --save
*/

let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);

let age = Number(rlSync.question("How old are you?\n"));
console.log(`You are, ${age} years old.`)
console.log(`In 10 years, you will be ${age+10} years old.`)
console.log(`In 20 years, you will be ${age+20} years old.`)
console.log(`In 30 years, you will be ${age+30} years old.`)
console.log(`In 40 years, you will be ${age+40} years old.`)



/*
 In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. 
 Add a function to this program that solicits the user's first and last names in separate invocations; 
 the function should return the appropriate name as a string. Use the return values to greet the user with their full name.
*/

const getName = (prompt) =>  {
  return rlSync.question(prompt);
}

const firstName = getName('What is your first name? ');
const lastName = getName('What is your last name? ')
console.log(`hello, ${firstName} ${lastName}!`);