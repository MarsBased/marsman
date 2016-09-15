# MarsMan

Frontend framework for starting new projects.

Developed with Middleman (https://middlemanapp.com/).
=======
Then use the Marsman template, init the project with the following command:

```
middleman init new_project -T marsbased/marsman-template
```

## Project README

Developed with Middleman (https://middlemanapp.com/)
>>>>>>> starting upgrade to Middleman v4
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
