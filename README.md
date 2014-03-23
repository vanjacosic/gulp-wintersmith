# Using Wintersmith with gulp

#### Note: This is not a gulp plugin, but a module with abstractions for your gulpfile.

[Wintersmith](https://github.com/jnordberg/wintersmith) is an aweseome static website generator. [gulp](https://github.com/gulpjs/gulp) is an equally awesome task runner. I like to use gulp in my Wintersmith project to handle everything - so I decided to share my recipe for it.

At first, I created `gulp-wintersmith` as gulp plugin to automate my development workflow with Wintersmith. But creating a specific plugin to connect them, is in violation of the [gulp plugin guidelines](https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/guidelines.md) and of the spirit of creating non-specific modules.

I have replaced the plugin in this repo with a simple module and this readme, to serve as a reference for how one can use gulp with Wintersmith.

## Getting started

1. Make sure Wintersmith is installed in your project. If not, install it:

		npm install wintersmith --save 

2.  Copy the `run-wintersmith.js` file to your project.

3.  Require it in your `gulpfile.js`
	
		var runWintersmith = require('./run-wintersmith');

4.  Create gulp tasks, eg. to preview your site:
	
		gulp.task('preview', function() {
		    runWintersmith.preview();
		});
	
## Usage

Please take a look at the `example-gulpfile.js` for full usage example.

## API

#### runWintersmith.preview()
Starts the Wintersmith site in preview mode, with default hostname and port. (`localhost:3000`)

#### runWintersmith.build()
Generates the Wintersmith site to the default directory. (`/build`)

## Configuration

The module has a few default settings. They can be overwritten in the following way:

	var runWintersmith = require('./run-wintersmith');
	
	runWintersmith.settings.host = 'somehostname';
	runWintersmith.settings.port = 8080;
	runWintersmith.settings.configFile = 'myConfig.json';

**settings.configFile**:

Sets which wintersmith configuration file to read from. Default is `config.json`.

**settings.host**:

Sets the server hostname. Default is `localhost`. Only used in `preview` mode.

**settings.port**:

Sets the server port. Default is `3000`. Only used in `preview` mode.

## Feedback

Please let me know if you have any ideas or feedback to this module.