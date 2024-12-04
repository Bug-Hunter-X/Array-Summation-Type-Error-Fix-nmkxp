# JavaScript Array Summation Bug
This repository demonstrates a common type error in JavaScript when summing array elements. The `calculateTotal` function in `bug.js` throws an error if the input array contains non-numeric values.  The corrected version in `bugSolution.js` adds input validation and robust error handling.

## Bug Description
The original `calculateTotal` function lacks input validation. If the array `prices` contains non-numeric values, a `TypeError` is thrown during the addition operation. This is a common issue when working with untrusted or dynamic data.  Furthermore, negative numbers are not handled. 

## Solution
The solution in `bugSolution.js` includes input validation to check if each element in the array is a number.  If a non-numeric value is encountered, it throws a more informative error message. It also gracefully handles negative numbers.

## How to Run
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a code editor.
3. Run the JavaScript code in a browser's console or using Node.js.

## Lessons Learned
* Always validate user inputs, particularly when dealing with data from external sources.
* Handle potential errors gracefully to prevent application crashes.
* Consider edge cases when designing functions to ensure robustness.