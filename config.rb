sprockets.import_asset 'modernizr'
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir, 'fonts'

activate :autoprefixer
activate :livereload

configure :development do
  set :environment, 'development'
end

activate :directory_indexes
configure :build do
  ignore 'shapes/*'
  set :environment, 'production'
end

# activate :deploy do |deploy|
#   deploy.method = :rsync
#   deploy.host   = 'marsman.marsbased.com'
#   deploy.path   = '/home/deploy/apps/marsman
#   deploy.user  = 'deploy'
#   deploy.flags = '-avzp --chmod=+r'
# end
