'use strict';

var di = require('di-linker');

di.walk([
	'src/**/*.js',
]).then((context) => {
	return context.bootstrap(['main']);
}).catch((err) => {
	console.error(err);
});
