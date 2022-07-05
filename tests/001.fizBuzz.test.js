import fizzBuzz from '../code/001.fizzBuzz.js'

describe('When divisible by 2', () => {
    test('should return "fizz"', () => {
        expect(fizzBuzz(2)).toBe('fizz')
    });
});

describe('When divisible by 3', () => {
    test('should return "buzz"', () => {
        expect(fizzBuzz(3)).toBe('buzz')
    });
});

describe('When divisible both by 2 and 3', () => {
    test('should return "fizzbuzz"', () => {
        expect(fizzBuzz(6)).toBe('fizzbuzz')
    });
});

describe('When not divisible by either 2 and 3', () => {
    test('should return empty string ""', () => {
        expect(fizzBuzz(5)).toBe('')
    });
});