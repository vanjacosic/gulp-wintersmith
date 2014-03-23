//
// Example gulpfile for use with Wintersmith
//
// 'gulp watch' runs preview mode with a local server and refreshes the browser
// when Markdown or Jade files are modified. Requires Livereload for Chrome.
//
// 'gulp build' builds the site to the default folder.

// Include gulp
var gulp = require('gulp');

// Include plugins
var clean = require('gulp-clean');
var refresh = require('gulp-livereload');
var runWintersmith = require('./run-wintersmith');
var lr = require('tiny-lr');
var server = lr();

//
// Directories
//
var BUILD_DIR = 'build';
var CONTENT_DIR = 'contents';

//
// Helper tasks
//
gulp.task('clean', function() {
    // Clean the build dir
    return gulp.src(BUILD_DIR, { read: false }).pipe(clean());
});

gulp.task('lr-server', function() {
    // Start livereload server
    server.listen(35729, function(err) {
        if(err) { return console.log(err); }
    });
});

//
// Main tasks
//
gulp.task('refresh-browser', function() {
    // Tell livereload to refresh browser
    gulp.src('config.json', {read: false})
        .pipe(refresh(server));
});

gulp.task('build-site', function() {
    // Build wintersmith site
    runWintersmith.build();
});

gulp.task('preview-site', function() {
    // Run wintersmith in preview mode
    runWintersmith.preview();
});

//
// Watch task
//
gulp.task('watch', function(){
    // Run other tasks
    gulp.run(
        'preview-site',
        'lr-server'
    );

    // Watch jade files
    gulp.watch('templates/*.jade', ['refresh-browser']);

    // Watch Markdown files
    gulp.watch(CONTENT_DIR + '/**', ['refresh-browser']);
});

//
// Build task
//
gulp.task('build', ['clean'], function(){
    gulp.run('build-site');
});
