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
npm install
bundle install
bundle exec middleman server
```

To update the SVG shapes, place the needed SVG files inside source/shapes and
call:

```
grunt svg
```

## Deploy

The deploy is configured to work only with MarsBased servers and MarsBased
employees credentials.

```
bundle exec middleman deploy --build-before
```
