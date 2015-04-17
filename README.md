# Marsman Template
Middleman Template for starting new projects.

## Installation of the Marsman Template

To use Marsman as a template, clone the Git repository into ~/.middleman, like so:

```
git clone https://github.com/MarsBased/marsman-template.git ~/.middleman/marsman
```

Then use the new template argument for the middleman init command:

```
middleman init new_project --template=marsman
```

## Project readme

Developed with Middleman (https://middlemanapp.com/)
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

## Compatibility

**Browser compatibility:**

* Chrome (versión actual)
* Safari (versión actual)
* Firefox (versión actual)
* Internet Explorer 9 (y superior)
* Android (versión 4.x y superior)
* iOS (versión actual)

**Supported Resolutions:**

* 320px to 480px (landscape and portrait)
* 500px to 768px (portraits versions)
* 768px to 1024px (Landscape versions)
* 1024px too anything (Desktop versions)


