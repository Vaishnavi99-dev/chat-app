// Here we will have the Unit tests for all the Utility functions used in the server
import factorial from '../utils.js';

describe('factorial Function Test case: should return the Factorial of the provided num.', () => {
 
  test('should throw Error from negative numbers', () => {
    expect(() => factorial(-4)).toThrow("Negative numbers do not have factorials.");
  });

  test('should return 1 from number = 0', () => {
    expect(factorial(0)).toBe(1);
  });

  test('should return 4 from number = 24', () => {
    expect(factorial(4)).toBe(24);
  });

});