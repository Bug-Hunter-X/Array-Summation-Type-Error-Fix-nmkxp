//Improved function with input validation and error handling
function calculateTotal(prices) {
  let total = 0;
  //Input validation
  for (let i = 0; i < prices.length; i++) {
    if (typeof prices[i] !== 'number') {
      throw new Error('Array elements must be numbers');
    }
    total += prices[i];
  }
  return total;
}

const prices = [10, 20, 30, 40, 50];
const total = calculateTotal(prices);
console.log(total); // Output: 150

//Handles negative numbers correctly
const prices2 = [10, -20, 30, -40, 50];
const total2 = calculateTotal(prices2);
console.log(total2); // Output: 30

//Example of error handling
try {
  const prices3 = [10, 20, 'thirty', 40, 50];
  const total3 = calculateTotal(prices3);
  console.log(total3);
} catch (error) {
  console.error(error.message); // Output: Array elements must be numbers
}
