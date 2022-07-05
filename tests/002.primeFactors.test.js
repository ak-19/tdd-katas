import factorize from '../code/002.factorize.js'

describe('When called on 12', () => {
    test('should return [2,2,3]', () => {
        expect(factorize(12)).toEqual([2,2,3])
    });
});


describe('When called on 5', () => {
    test('should return [5]', () => {
        expect(factorize(5)).toEqual([5])
    });
});


describe('When called on 10', () => {
    test('should return [2, 5]', () => {
        expect(factorize(10)).toEqual([2, 5])
    });
});

describe('When called on 77', () => {
    test('should return [7, 11]', () => {
        expect(factorize(77)).toEqual([7, 11])
    });
});


