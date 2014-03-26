# gulp-wintersmith

**Notice:** This plugin has been blacklisted and no longer exists. For instructions on how to use Wintersmith with gulp please follow the link below.

-------

#### New module located at: [https://github.com/vanjacosic/run-wintersmith](https://github.com/vanjacosic/run-wintersmith)

-------


### A bit of background

[Wintersmith](https://github.com/jnordberg/wintersmith) is an awesome static website generator. [gulp](https://github.com/gulpjs/gulp) is an equally awesome task runner. I like to use gulp in my Wintersmith project to handle 
everything - so I decided to share how I do it.

At first, I created `gulp-wintersmith` as gulp plugin to automate my development workflow with Wintersmith. But as I learned from the gulp core team: Creating a specific plugin to connect them, is in violation of the [gulp plugin guidelines](https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/guidelines.md) and of the spirit of creating non-specific modules.

I have unpublished `gulp-wintersmith` from npm. And instead I made this module more generic, so it could be used in different contexts and not only with gulp. The new module is called [run-wintersmith](https://github.com/vanjacosic/run-wintersmith).

