require "lib/helpers"
helpers Helpers

sprockets.import_asset 'modernizr'
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir, 'fonts'
set :partials_dir, 'partials'

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

activate :email do |email|
  email.user = 'postmaster@mg.marsbased.com'
  email.password = 'smtp_pass'
  email.emails_path= 'emails'
  email.to_email = 'your.email@whatever.com'
  email.from_email = 'mailer@mg.marsbased.com'
  email.port = 587
  email.domain = 'mg.marsbased.com'
  email.address = 'smtp.mailgun.org'
end
