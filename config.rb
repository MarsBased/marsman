sprockets.import_asset 'modernizr'
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir, 'fonts'

activate :autoprefixer

activate :directory_indexes
configure :build do
  ignore 'shapes/*'
end

# activate :deploy do |deploy|
#   deploy.method = :rsync
#   deploy.host   = 'middleman-template.marsbased.com'
#   deploy.path   = '/home/deploy/apps/middleman-template
#   deploy.user  = 'deploy'
# end