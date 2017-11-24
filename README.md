# MarsMan

<a href="https://waffle.io/MarsBased/marsman"><img src="https://img.shields.io/badge/Waffle-marsman-blue.svg?colorB=78bdf2" /></a>

Frontend framework for starting new projects.

Take a look at https://marsman.marsbased.com

Developed with Middleman (https://middlemanapp.com/). Uses Grunt to automatize SVG inline generation.

## MarsMan Installation

To use MarsMan as a template, init the project with the following command:

```
middleman init new_project -T marsbased/marsman
```

=======

# Project README

## Development

```
yarn install
bundle install
bundle exec middleman server
```

To update the SVG shapes, place the needed SVG files inside source/shapes and
call:

```
grunt svg
```

## Common Errors

**Q: Webpack compilation fails with an error similar to `Error: ENOENT: no such file or directory, scandir '/Users/cooluser/Documents/middleman-webpack-sample/node_modules/node-sass/vendor'`**

A: run `npm rebuild node-sass`

## TODO

* Add modernizr to JS template
* Test Select2
* Add/Test bootstrap
