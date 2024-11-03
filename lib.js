function avg(numbers) {
  let s = numbers.reduce((prev, curr) => prev + curr, 0);
  return s / numbers.length;
  }

function prime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
  }
  return true;
}

function factorial(n) {
  if (n < 0) return undefined; 
  let result = 1;
  for (let i = 2; i <= n; i++) {
      result *= i;
  }
  return result;
}

  module.exports = {
  avg,
  prime,
  factorial
  }