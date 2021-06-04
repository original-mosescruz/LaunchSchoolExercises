/*
Concatenate two or more strings, one with your first name and one with your last, to create a string with your 
full name as its value. For example, if your name is John Doe, think about how you can put 'John' and 'Doe' 
together to get 'John Doe'.
*/

console.log("Moses " + "Cruz");

/*
Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:
*/

let num = 4936;
while(num != 0) {
  const nextDigit = num%10;
  console.log(nextDigit)
  num = (num - nextDigit)/10; 
}

/*
Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.
*/
console.log(Number.parseInt('5') + 10);

/*
Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:
*/
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

/*
Create an array named names that contains a list of pet names. 
*/
const names = ["asta", "butterscotch", "pudding", "neptune", "darwin"];

/*
Create an object named pets that contains a list of pet names and the type of animal. For instance:
*/
const pets = {
  "asta": "dog", 
  "butterscotch": "cat", 
  "pudding": "cat", 
  "neptune": "fish", 
  "darwin": "lizard"
};