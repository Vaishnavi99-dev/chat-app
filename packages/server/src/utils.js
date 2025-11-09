// Function to calculate the factorial of a number.

// maxmum 6
// feature/factorial-function

function factorial(n) {
  if (n < 0) {
    throw new Error("Negative numbers do not have factorials.");
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

export default factorial;