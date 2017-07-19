'use strict';

exports.name = 'main';

exports.requires = [
	'app',
	'config.env',
];

exports.factory = (app, env) => {
	let server = app.listen(env.port, () => {
		let host = server.address().address;
		let port = server.address().port;

		console.log('app listening at http://%s:%s', host, port);
	});

	return server;
};
