function calculateTotal(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  return total;
}

const prices = [10, 20, 30, 40, 50];
const total = calculateTotal(prices);
console.log(total); // Output: 150

//Bug: The calculateTotal function works correctly for arrays with numbers. However, it will throw an error if the input array contains non-numeric values.  For example, if prices = [10, 20, 'thirty', 40, 50], it will throw an error because it cannot add a string and a number.

//Another subtle bug: Although the function works correctly for positive numbers,it may not handle negative numbers well in real world scenarios where negative prices might be possible.  