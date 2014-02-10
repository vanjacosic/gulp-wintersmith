# [gulp](https://github.com/wearefractal/gulp)-wintersmith

> Gulp plugin for the [Wintersmith](https://github.com/jnordberg/wintersmith) static site generator

Simple plugin that lets you make a gulp task to either build or preview your site.

## Install

Install with npm from GitHub

```
npm install --save-dev gulp-wintersmith
```

## Usage

Create a new task where you source the [Wintersmith config file](https://github.com/jnordberg/wintersmith#configuration) and pipe it into this plugin.

**Examples:**

```js
var gulp = require('gulp');
var wintersmith = require('gulp-wintersmith');

// Usage of preview action
gulp.task('site-preview', function() {
    gulp.src('config.json')
        .pipe(wintersmith('preview'));
});

// Usage of preview action with custom settings
gulp.task('site-preview', function() {
    gulp.src('config.json')
        .pipe(wintersmith('preview', { hostname: '127.0.0.1', port: '5000' }));
});

// Usage of build action
gulp.task('site-build', function() {
    gulp.src('config.json')
        .pipe(wintersmith('build'));
});

```

## API

### wintersmith(action[, serverOptions])

#### action
Type: `String`, Required: Yes

Sets which Wintersmith action to perform. Accepts `preview` or `build`.

#### serverOptions
Type: `Object`, Required: No

Optional configuration of server that runs in `preview` mode.

##### serverOptions.hostname
Type: `String`, Required: No, Default: `localhost`

Sets which hostname the preview server should use.

##### serverOptions.port
Type: `Number`, Required: No, Default: `3000`

Sets which port the preview server should use.


## License
MIT © Vanja Cosic