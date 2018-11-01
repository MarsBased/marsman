# MarsMan

<a href="https://waffle.io/MarsBased/marsman"><img src="https://img.shields.io/badge/Waffle-marsman-blue.svg?colorB=78bdf2" /></a>
<img src="https://img.shields.io/github/license/mashape/apistatus.svg" />

Frontend framework for starting new projects.

Take a look at https://marsman.marsbased.com

Developed with Middleman (https://middlemanapp.com/). Uses Grunt to automatize SVG inline generation.

## MarsMan Installation

To use MarsMan as a template, init the project with the following command:

```
middleman init new_project -T marsbased/marsman
```

## Webpack

MarsMan uses Webpack to compile and handle Javascript, Styles and all static assets through the [middleman-webpack](https://github.com/MarsBased/middleman-webpack) extension, which provides a set of helpers that can be used in the HTML to include these assets.

Webpack configuration is placed in the `config` folder with the following structure:
* `shared.js` has the configuration options shared by all environments.
* `development.js` has development-specific settings.
* `production.js` has build specific settings.

Webpack is configured to be able to use ES6 in Javascript files.

## Modernizr

By default a full Modernizr build is included. The activated features and detections can be customized in `.modernizrrc`

=======

# Project README

## Development

```
yarn install
bundle install
bundle exec middleman server
```

or

```
yarn install
yarn start
```

To update the SVG shapes, place the needed SVG files inside source/shapes and
call:

```
grunt svg
```

## Common Errors

**Q: Webpack compilation fails with an error similar to `Error: ENOENT: no such file or directory, scandir '/Users/cooluser/Documents/middleman-webpack-sample/node_modules/node-sass/vendor'`**

A: run `npm rebuild node-sass`
