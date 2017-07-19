'use strict';

exports.name = 'app';

exports.requires = [
	'@express',
	'@path',
	'config.env'
];

exports.activations = [
	'routes.render',
];

exports.factory = (express, path, env) => {
	let app = express();

	// use template
	app.set('view engine', 'ejs');

	// use static files
	app.use(express.static(path.join(env._rootDir, '/assets')));
	app.use(express.static(path.join(env._rootDir, '/src')));

	// config other

	return app;
};
