// Requirements
var gutil = require('gulp-util');
var map = require('map-stream');
var wintersmith = require('wintersmith');

// Helper function
function errorMessage(message) {
    throw new gutil.PluginError('gulp-wintersmith', message);
}

function doActionBuild(env) {
    // Build site to path
    env.build(function(error) {
        if (error) {
            errorMessage('Error:' + error);
        }

        gutil.log('gulp-wintersmith', 'Done building!');
    });
}

function doActionPreview(env) {
    // Run in preview mode
    env.preview(function(error) {
        if (error) {
            errorMessage('Error:' + error);
        }
    });
}

// Plugin function
module.exports = function(action) {
    // Prepare argument
    action = action || 'preview';

    // Process files
    return map(function(file, callback) {

        // Let empty files pass
        if (file.isNull()) {
            return callback(null, file);
        }

        // Emit error for streams
        if (file.isStream()) {
            errorMessage('Streams are not supported');
        }

        // Load wintersmith environment
        var env = wintersmith(file.path);

        // Handle actions
        if (action === 'preview') {
            doActionPreview(env);
        } else if (action === 'build') {
            doActionBuild(env);
        } else {
            errorMessage('Action "' + action + '" not recognized. Use either "preview" or "build".');
        }

        callback(null, file);
    });
};