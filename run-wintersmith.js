// Requirements
var path = require('path');
var wintersmith = require('wintersmith');

// Helper function for errors
function errorMessage(message) {
    throw new Error(message);
}

// Default settings
var settings = {
    configFile: 'config.json',
    hostname: 'localhost',
    port: 3000
};

function loadEnvironment(){
    // Load config file path from settings
    var file = settings.configFile;

    // Emit error for unsupported file types
    if (['.json'].indexOf(path.extname(file)) === -1) {
        errorMessage('File ' + file + ' is not supported. Expected .json file.');
    }

    // Load and return wintersmith environment
    return wintersmith(file);
}

function wintersmithBuild(){
    // Try to load environment
    var env = loadEnvironment();

    // Build site
    env.build(function(error) {
        if (error) {
            errorMessage(error);
        }
        // Log on successful build
        console.log('Wintersmith has finished building!');
    });
}

function wintersmithPreview(){
    // Try to load environment
    var env = loadEnvironment();

    // Override env settings
    env.config.hostname = settings.hostname;
    env.config.port = settings.port;

    // Run in preview mode
    env.preview(function(error) {
        if (error) {
            errorMessage(error);
        }
    });
}

module.exports.settings = settings;
module.exports.build = wintersmithBuild;
module.exports.preview = wintersmithPreview;
