const fibonacci = function (n) {
	if (n < 0) return "OOPS";
	if (!Number.isFinite(n) && n !== "0") return 1;
	if (!Number.isFinite(n) && n === "0") return 0;
	if (n < 2) return n;
	else return fibonacci(n - 2) + fibonacci(n - 1);
};

// Do not edit below this line
module.exports = fibonacci;
