'use strict';

function sum(a, b, c) {
	return a + b + c;
}

console.log(sum(...[3, 4, 5]));  // 12

// Combine array spread with array rest:
console.log([...'abcde'][2]);  // c