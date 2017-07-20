'use strict';

exports.name = 'bootstrap.mongoose';

exports.requires = [
	'@mongoose',
	'@bluebird',
	'config.env',
];

exports.factory = (mongoose, bluebird, env) => {
	mongoose.connect(env.db);
	mongoose.Promise = bluebird;

	//Bind connection to error event (to get notification of connection errors)
	mongoose.connection.on('error', console.error.bind(console, 'Can not connect to mongo: ' + env.db));

	return mongoose;
};
