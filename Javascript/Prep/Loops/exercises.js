const fib = (num) => {
  if (num === 0 || num === 1){
    return num
  } else {
    return fib(num-1) + fib(num-2);
  }
}


let factorial = (n) => {
  let total = 1;
  for(let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
}

console.log(factorial(8));

factorial = (n) => {
  if(n == 1){
    return n;
  } else {
    return n* factorial(n-1);
  }
}

console.log(factorial(8));