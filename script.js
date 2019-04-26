function fib(num){
    return num < 2 ? 1 : num * fib(num - 1);
}

module.exports = {
	fib
}