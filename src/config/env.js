'use strict';

exports.name = 'config.env';
exports.requires = [
	'@lodash', // require node package
	'@path', // require node package
	'#injector', // require build-in dependencies
	'config.envs.default' // require file with exports name
];

exports.factory = (_, path, injector, defaults) => {
	let profile = defaults._profile = process.env.NODE_ENV || 'development';

	return injector.get('config.envs.' + profile).then((profile) => {
		return _.defaultsDeep(profile, defaults);
	}).then((env) => {
		let rootDir = path.join(__dirname, '../../');

		env._rootDir = rootDir;
		env._bootstrapFile = path.join(rootDir, defaults.bootstrapFile);

		return env;
	});
};
