const functions_to_test = require('./script');
const fib = functions_to_test.fib;

test('check if fib(3) = 6',()=>{
	expect(fib(3)).toBe(6);
});

test('check if fib with non-numeric argument throws an error',()=>{
	["abc", true, Symbol("z"), [], {}, ()=>{}, new Map(), new Set(), new Error()]
		.forEach(el => expect(()=>fib(el)).toThrowError(TypeError("Argument musi być liczbą")));
});

test('check if fib with negative number argument throws an error',()=>{
	expect(()=>fib(-1)).toThrowError(RangeError("Argument musi być dodatnią liczbą całkowitą"));
});

test('check if fib with non-integer number argument throws an error',()=>{
	expect(()=>fib(3.65)).toThrowError(RangeError("Argument musi być dodatnią liczbą całkowitą"));
});