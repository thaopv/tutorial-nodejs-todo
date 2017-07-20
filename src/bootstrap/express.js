'use strict';

exports.name = 'bootstrap.express';

exports.requires = [
	'@express',
	'@path',
	'@body-parser',
	'@cookie-parser',
	'config.env'
];

exports.factory = (express, path, bodyParser, cookieParser, env) => {
	let app = express();

	// use template
	app.set('view engine', 'ejs');

	// use static files
	app.use(express.static(path.join(env._rootDir, '/assets')));
	app.use(express.static(path.join(env._rootDir, '/src')));

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: false,
	}));

	app.use(cookieParser());

	return app;
};
