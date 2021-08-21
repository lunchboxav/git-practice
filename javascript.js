/**
 * A function to generate fibonacci array.
 * @constructor
 * @param {number} limit - limiting the fibonacci length, minimum generating 2 item.
 */
function fibonacci(limit) {
  let fib = [];

  fib[0] = 0;
  fib[1] = 1;
  for (let i = 2; i < limit; i++) {
    // Next fibonacci number = previous + one before previous
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  return fib;
}

console.log(fibonacci(3));
alert("coba");
