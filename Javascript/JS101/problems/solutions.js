/*
Write a function that takes one integer argument, which may be positive, negative, or zero. 
This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.
*/


// const isOdd = num => !!(Math.abs(num) % 2)
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

/*
Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. 
The UTF-16 string value is the sum of the UTF-16 values of every character in the string. 
(You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)
*/

const utf16Value = (str) => {
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i)
  }
  console.log(sum);
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811