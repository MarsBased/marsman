# Upgrade Guide to Middleman v4

See all changes here: https://middlemanapp.com/basics/upgrade-v4/

## Important changes:
* Removed `partials_dir` config option.
* Removed `page` template local variable. Use `current_resource` instead.
* Can no longer use instance variables inside templates.

## Environments
In previous versions of Middleman, we had just the "development" environment and the the "build" mode. Now, we have 2 environments: "development" and "production" and 2 modes: "build" and "server". Each has its own peculiarities.

When running `middleman server` we are in "development" and "server mode". While when running `middleman build` we are in "production" and "build" mode.

`configure` blocks can now target both environments and modes.

Examples:
```
configure :server { # enable sprockets debugging }
configure :build { # run some post-build hooks }
configure :development { # enable some sass debug settings }
configure :production { activate :minify_html }
``` 

Also, you can place specific configuration for an environment in a file named after the environment inside `/environments`, for example all configuration inside `environments/production.rb` will target the production environment

