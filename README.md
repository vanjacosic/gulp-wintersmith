# [gulp](https://github.com/wearefractal/gulp)-wintersmith

> Gulp plugin for the [Wintersmith](https://github.com/jnordberg/wintersmith) static site generator

Simple plugin for use with Wintersmith. Makes it possible to make a gulp task to either generate or preview the site.

## Install

Install with npm from GitHub

```
npm install --save-dev git+https://github.com/vanjacosic/gulp-wintersmith.git
```


## Example

```js
var gulp = require('gulp');
var wintersmith = require('gulp-wintersmith');

// Usage of preview action
// Note the sourced file is the Wintersmith config.json file
gulp.task('site-preview', function() {
    gulp.src('config.json')
        .pipe(wintersmith('preview'));
});

// Usage of build action
// Note the sourced file is the Wintersmith config.json file
gulp.task('site-build', function() {
    gulp.src('config.json')
        .pipe(wintersmith('build'));
});

```

## API

### wintersmith(action)

#### action
Type: `String`
Required: Yes

Sets which Wintersmith action to perform. Either 'preview' or 'build'.


## License
MIT © Vanja Cosic