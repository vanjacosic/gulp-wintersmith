# [gulp](https://github.com/wearefractal/gulp)-wintersmith

> Gulp plugin for the [Wintersmith](https://github.com/jnordberg/wintersmith) static site generator

Simple plugin that lets you make a gulp task to either build or preview your site.

## Install

Install with npm from GitHub

```
npm install --save-dev git+https://github.com/vanjacosic/gulp-wintersmith.git
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

// Usage of build action
gulp.task('site-build', function() {
    gulp.src('config.json')
        .pipe(wintersmith('build'));
});

```

## API

### wintersmith(action)

#### action
Type: `String`, Required: Yes

Sets which Wintersmith action to perform. Either 'preview' or 'build'.


## License
MIT © Vanja Cosic