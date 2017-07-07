'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		jscs: {
			options: {
				config: 'rules/.jscsrc',
			},
			src: [
				'index.js',
				'Gruntfile.js',
				'src/**/*.js',
			],
		},
		jshint: {
			options: {
				jshintrc: 'rules/.jshintrc',
			},
			src: '<%= jscs.src %>',
		},
		develop: {
			dev: {
				file: './index.js',
			},
		},
		watch: {
			options: {
				spawn: false,
			},
			files: '<%= jscs.src %>',
			tasks: [
				'jscs',
				'jshint',
				'develop:dev',
			],
		},
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', [
		'static',
		'develop:dev',
		'watch',
	]);

	grunt.registerTask('static', [
		'jscs',
		'jshint',
	]);
};
