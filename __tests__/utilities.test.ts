import { createRandomNumber, sumNumbers, getCookie } from '../src/modules/utilities';

describe('utilities', () => {
    test('createRandomNumber returns a number between 0 and 1', () => {
        const randomNumber = createRandomNumber();
        expect(randomNumber).toBeGreaterThanOrEqual(0);
        expect(randomNumber).toBeLessThanOrEqual(1);
    });

    test('sumNumbers returns the sum of two numbers', () => {
        const result = sumNumbers(2, 3);
        expect(result).toEqual(5);
    });

    test('getCookie returns the value of a cookie', () => {
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: 'test=123;test2=456;',
          });
        const result = getCookie('test2');
        console.log(result);
        expect(result).toEqual('456');
      });
})