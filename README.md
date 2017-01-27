# MarsMan

Frontend framework for starting new projects.

Developed with Middleman (https://middlemanapp.com/).
Uses Grunt to automatize SVG inline generation.

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
