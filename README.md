# Tutorial NodeJS

[![Build Status][travis-image]][travis-url]
[![GitHub license][github-license]][github-license-url]
[![GitHub stars][github-stars]][github-stars-url]

# Package Manager
Use [YARN][yarn] to manage package

# Usage
* Install [YARN][yarn]
* Install global `grunt-cli`
```bash
yarn add global grunt-cli
```
* Open command-line in project
* Run
```bash
grunt
```
Now browse to the app at [`localhost:8080`][local-app-url].

# Directory Layout
```
tutorial-nodejs
	├───assets 					-> contains font, images, etc
	├───rules 					-> contains rule check conventions
	└───src 					-> all of the source files for the application
		├───config 				-> contains config for application
		│	└───env 			-> contains config env for application
		├───middlewares 		-> define middleware to handle request
		├───models 				-> store data
		├───routes 				-> define route for application
		└───views 				-> contains page, partial etc to render UI
			└───pages 			-> define page
			└───partials 		-> define partials of page
	├───app.js 					-> create application use express
	├───main.js 				-> define application to host
	index.js 					-> bootstrap application
	package.json 				-> contains package used in application
	Gruntfile.js 				-> define job to build and support develop

```

# License
[The MIT License](http://opensource.org/licenses/MIT)

[github-stars]: https://img.shields.io/github/stars/thaopv/tutorial-nodejs.svg
[github-stars-url]: https://github.com/thaopv/tutorial-nodejs/stargazers
[github-license]: https://img.shields.io/badge/license-MIT-blue.svg
[github-license-url]: https://raw.githubusercontent.com/thaopv/tutorial-nodejs/master/LICENSE
[travis-image]: https://travis-ci.org/thaopv/tutorial-nodejs.svg
[travis-url]: https://travis-ci.org/thaopv/tutorial-nodejs
[yarn]: https://yarnpkg.com/en/
[local-app-url]: http://localhost:8080/
