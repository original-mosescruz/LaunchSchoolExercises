/*
 Challenging Exercise This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier in the book. 
 If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.
 Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise. 
 You can also use Object.is(value, NaN) to make the same determination.
 Without using either of those methods, write a function named isNotANumber 
 that returns true if the value passed to it as an argument is NaN, false if it is not.
*/

const isNotANumber = (arg) => {
  if(typeof(arg) != 'number'){
    return false;
  } else {
    if (arg != 0 && !arg){
      return true
    } else {
      return false;
    }
  }
}

function isNotANumberBetter(value) {
  return value !== value;
}
// This works since NaN is the only JS value that is not === to itself.

console.log(isNotANumber(1));
console.log(isNotANumber(NaN));
console.log(isNotANumber(0/0));
console.log(isNotANumber('hello'));
console.log(isNotANumber(0));

console.log('--');


/*
 Earlier, we learned that JavaScript has multiple versions of the numeric value zero. In particular, it has 0 and -0. 
 These numbers, while being mathematically nonsensical, are distinct values in JavaScript. 
 We won't get into why JavaScript has a 0 and -0, but it can be useful in some cases.
There's a problem, however: JavaScript itself doesn't seem to realize that the values are distinct:
Without using Object.is, write a function that will return true if the argument is -0, and false if it is 0 or any other number.
*/

const isNegativeZero = num => 1/num === -Infinity? true : false;

console.log(isNegativeZero(0));
console.log(isNegativeZero(-0));

SVGStringList
Boolean
null
undefined
object