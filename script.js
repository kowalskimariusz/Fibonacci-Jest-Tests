function fib(num){
	if (typeof num !== "number") {
		throw TypeError("Argument musi być liczbą");
	} else if (num < 0 || Number(num.toFixed(0)) !== num) {
		throw RangeError("Argument musi być dodatnią liczbą całkowitą");
	} else if (num > 2**32-1) {
		throw RangeError("Argument musi być liczbą mniejszą niż 4294967296 (2**32)");
	}
	let arr = [0,1];	
	while(arr.length < num) {
		arr.push(
			arr[arr.length-1]+
			arr[arr.length-2]
		);
	}
	return arr.slice(0, num);
}

module.exports = {
	fib
}