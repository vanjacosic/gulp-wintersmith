// Requirements
var path = require('path');
var map = require('map-stream');
var gutil = require('gulp-util');
var wintersmith = require('wintersmith');

// Helper function for errors
function errorMessage(message) {
    throw new gutil.PluginError('gulp-wintersmith', message);
}

function runWintersmithBuild(env) {
    // Build site to path
    env.build(function(error) {
        if (error) {
            errorMessage(error);
        }

        gutil.log('gulp-wintersmith:', 'Done building!');
    });
}

function runWintersmithPreview(env, options) {
    // Override env settings
    env.config.hostname = options.hostname;
    env.config.port = options.port;

    // Run in preview mode
    env.preview(function(error) {
        if (error) {
            errorMessage(error);
        }
    });
}

// Plugin function
module.exports = function(actionArg, serverOptions) {

    // Process files
    return map(function(file, callback) {

        // Use provided options or use default
        var action = actionArg || 'preview';
        var options = serverOptions || { hostname: 'localhost', port: 3000};

        // Let empty files pass
        if (file.isNull()) {
            return callback(null, file);
        }

        // Emit error for streams
        if (file.isStream()) {
            errorMessage('Streams are not supported');
        }

        // Emit error for unsupported file types
        if (['.json'].indexOf(path.extname(file.path)) === -1) {
            errorMessage('File ' + file.relative + ' is not supported. Expected .json file.');
            return callback(null, file);
        }

        // Load wintersmith environment
        var env = wintersmith(file.path);

        // Handle actions
        if (action === 'preview') {
            runWintersmithPreview(env, options);
        } else if (action === 'build') {
            runWintersmithBuild(env);
        } else {
            errorMessage('Action "' + action + '" not recognized. Use either "preview" or "build".');
        }

        // Pass file through
        callback(null, file);
    });
};
