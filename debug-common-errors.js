/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp");

// What’s Wrong? Above code is not having double quote and closing ), also missing at the end ;



// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, "eight"]; // we can either replace data corrected as 8
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === "number") {
    let doubled = numbers[i] * 2;
    console.log(doubled);
  } else {
    console.log(`Skipping invalid element: ${numbers[i]}`);
  }
}
// What’s Wrong?
/*
The array contains a string ("eight"), which causes an issue when multiplied by 2.
JavaScript will return NaN (Not a Number) for "eight" * 2, leading to an unintended output.
corrected code above, in case of currently eight  we will log error*/



// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // Number is NOT prime
    }
  }
  return true; // Number is prime
}


console.log(isPrime(7)); // Expected true but gets false

// What’s Wrong?
/*Issue:
The function incorrectly returns true when a number is divisible by another number.
The return statement inside the loop (return true;) is wrong because it should only return false when a divisor is found. 
corrected the code */