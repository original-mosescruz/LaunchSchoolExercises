/*
 Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array 
 in a for statement. The object should contain at least 3 elements. You should place your code 
 between the braces in the let statement:
*/

let myArray = {
  'length': 3,
  0: 'zero',
  1: 'one',
  2: 'two'
};


for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
console.log('--');





/*
 Create an array from the keys of the object obj below, with all of the keys converted to uppercase. 
 Your implementation must not mutate obj.
*/

let obj = {
  b: 2,
  a: 1,
  c: 3,
};
// 
let upperCaseKeys = (Object.keys(obj)).map(key => key.toUpperCase())
console.log(upperCaseKeys);
console.log('--');




/*
 Create a function that creates and returns a copy of an object. The function should take two arguments: 
 the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

The function should let you omit the array of keys argument when calling the function. 
If you do omit the argument, the function should copy all of the existing keys from the object.

Here are some examples for your reference:
*/





const copyObj = (objToCopy, keysToCopy = null) => {
  if(keysToCopy === null) {
    return Object.assign({}, objToCopy)
  } else {
    let obj = {}
    keysToCopy.forEach(key => {
      obj[key] = objToCopy[key]
    });
    return obj
  }
};

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }
console.log('--');





/*
 Write some code to replace the value 6 in the following object with 606:
*/

obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606
console.log(obj.bar[3])