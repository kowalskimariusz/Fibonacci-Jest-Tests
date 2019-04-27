function fib(num){
    if (typeof num !== "number") {
        throw TypeError("Argument musi być liczbą");
    } else if (num < 0 || Number(num.toFixed(0)) !== num){
        throw RangeError("Argument musi być dodatnią liczbą całkowitą");
    }
    return num < 2 ? 1 : num * fib(num - 1);
}

module.exports = {
	fib
}