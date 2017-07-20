'use strict';

exports.name = 'routes.render';

exports.requires = [
	'@path',
	'bootstrap.express',
	'config.env',
];

exports.factory = (path, app, env) => {
	app.get('/', (req, res, next) => {
		res.render(env._bootstrapFile, {
			firstName: 'Thao',
			lastName: 'Pham',
		});
	});
};
