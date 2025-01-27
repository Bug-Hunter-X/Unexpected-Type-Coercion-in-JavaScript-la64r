function foo(a, b) {
  // Type checking before operation
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Invalid input: Arguments must be numbers';
  }
  return a + b;
}
console.log(foo(1, "2")); // Output: Invalid input: Arguments must be numbers
console.log(foo(1, 2)); // Output: 3