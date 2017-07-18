'use strict';

// Babel: Undefined
// Chrome: ReferenceError: a is not defined
// FireFox: ReferenceError: can't access lexical declaration `a' before initialization
// Safari: ReferenceError: Cannot access uninitialized variable.
// Edge: ?
//console.log(a);

let a = 1;

if (true) {
	
	// Babel: -
	// Chrome: ReferenceError: a is not defined
	// FireFox: ReferenceError: can't access lexical declaration `a' before initialization
	// Safari: ReferenceError: Cannot access uninitialized variable.
	// Edge: ?
	console.log(a);

	let a = 2;

	console.log(a);  // 2
}

console.log(a);  // 1