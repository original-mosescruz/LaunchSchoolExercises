/*
 false || (true && false); - F
true || (1 + 2); - T
(1 + 2) || true; - 3
true && (1 + 2); - 3
false && (1 + 2); - F
(1 + 2) && true; - T
(32 * 4) >= 129; - F
false !== !true; - F
true === 4; - F
false === (847 === '847'); - T
false === (847 == '847'); - F
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; - 
*/

/*
 Write a function, evenOrOdd, that determines whether its argument is an even number.
  If it is, the function should log 'even' to the console; otherwise, 
  it should log 'odd'. For now, assume that the argument is always an integer.
*/

const evenOrOdd = (num) => {
  if(Number.isInteger(num)){
    (num%2) ? console.log('odd') : console.log('even')
  } else {
    console.log('this function only accepts integers')
  }
  
};

evenOrOdd(1)
evenOrOdd(2)
evenOrOdd(15)
evenOrOdd(100)
evenOrOdd(101)

console.log("----");
if([]){
  console.log("true");
} else {
  console.log("false");
}