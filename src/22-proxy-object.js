/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

// Babel: Impossible due to ES5 limitations

let target = {};
let handler = {
	get: function (receiver, name) {
		return 'Proxy: ' + name;
	}
}

let proxy = new Proxy(target, handler);

console.log(proxy.TechDays);  // Proxy: TechDays