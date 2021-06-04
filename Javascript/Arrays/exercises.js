/*
 Log all of the even values from myArray to the console.
*/
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

myArray.forEach(num => {
  if (num % 2 === 0) {
    console.log(num);
  }
});
console.log('--');

/*
 Let's make the problem a little harder. In this problem, we're again interested in even numbers, 
 but this time the numbers are in nested arrays in a single outer array.
*/
myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(innerArr => {
  innerArr.forEach(num => {
    if (num % 2 === 0) {
      console.log(num);
    }
  })
});
console.log('--');

/*
 In this problem, we want to use the map function to create a new array that contains one element for 
 each element in the original array. If the element is an even value, then the corresponding element 
 in the new array should contain the string 'even'; otherwise, the element in the new array should 
 contain 'odd'.
*/
myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let res = myArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
})
console.log(res);
console.log('--');

/*
 Write a findIntegers function that takes an array argument and returns an array that contains only 
 the integers from the input array. Use the filter method in your function.
*/
const findIntegers = (arr) => arr.filter(element => Number.isInteger(element))

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers);
console.log('--');

/*
 Use map and filter to first determine the lengths of all the elements in an array of string values, 
 then discard the even values (keep the odd values).
*/
let oddLengths = (arr) => {
  let strLengths = arr.map(str => str.length);
  return strLengths.filter(len => len%2 == 1);
}
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
console.log('--');

/*
 Use reduce to compute the sum of the squares of all of the numbers in an array:
*/
const sumOfSquares = array => array.reduce((accumulator, currentValue) => accumulator + currentValue*currentValue, 0)
let array = [3, 5, 7];
console.log(sumOfSquares(array));
console.log('--');

/*
 Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. 
 Instead, use the reduce method.

 Hint: Use an array as the accumulator. Ideally, you should be able to use the return value of reduce as 
 the return value of the function.
*/
oddLengths = (arr) => {
  return arr.reduce((accumulator, currentValue) => {
    if (currentValue.length %2 == 1){
      accumulator.push(currentValue.length)
    } 
    return accumulator;
  }, [])
}
arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
console.log('--');

/*
 Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:
*/

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];
console.log(numbers1.includes(3))
console.log(numbers2.includes(3))
console.log(numbers3.includes(3))
console.log('--');

/*
 Write some code to replace the value 6 in the following array with 606
*/
let arrWith6 = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];
arrWith6[1][3] = 606;
console.log(arrWith6[1])
console.log('--');
