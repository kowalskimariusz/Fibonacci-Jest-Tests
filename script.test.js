const functions_to_test = require('./script');
const fib = functions_to_test.fib;

test('check if fib(3) = 6',()=>{
	expect(fib(3)).toBe(6);
});