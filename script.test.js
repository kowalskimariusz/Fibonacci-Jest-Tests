const functions_to_test = require('./script');
const fib = functions_to_test.fib;

test('check if fib(3) = [0,1,1]',()=>{
	expect(fib(3)).toEqual([0,1,1]);
});

test('check if fib(1) = [0]',()=>{
	expect(fib(1)).toEqual([0]);
});

test('check if fib(0) = []',()=>{
	expect(fib(0)).toEqual([]);
});

test('check if fib with number bigger than max array size (2**32-1) argument throws an error',()=>{
	expect(()=>fib(2**32).toThrowError(RangeError("Argument musi być liczbą mniejszą niż 4294967296 (2**32)")));
});

test('check if fib with non-numeric argument throws an error',()=>{
	["abc", true, Symbol("z"), [], {}, ()=>{}, new Map(), new Set(), new Error(), null, undefined]
		.forEach(el => expect(()=>fib(el)).toThrowError(TypeError("Argument musi być liczbą")));
});

test('check if fib with negative number argument throws an error',()=>{
	expect(()=>fib(-1)).toThrowError(RangeError("Argument musi być dodatnią liczbą całkowitą"));
});

test('check if fib with non-integer number argument throws an error',()=>{
	expect(()=>fib(3.65)).toThrowError(RangeError("Argument musi być dodatnią liczbą całkowitą"));
});