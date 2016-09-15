require "lib/helpers"
helpers Helpers


# sprockets.import_asset 'modernizr'

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir, 'fonts'
set :partials_dir, 'partials'

activate :autoprefixer
activate :pry
activate :directory_indexes

configure :development do
  activate :livereload
  set :environment, 'development'
end

ready do
  @pages = sitemap.resources.find_all{|p| p.source_file.match(/\.html/) }
  @pages.each do |r|
    @versions = []
    if @data = r.data['versions']
      @data.split(/[\s,']/).reject(&:empty?).each do |d|
        @versions.push(d)
      end
    end
    @versions.each do |version|
      @path = r.destination_path.gsub 'index.html', "_#{version}.html"
      proxy @path, r.path, :locals => { :version => version }
    end
  end
end

configure :build do
  ignore 'shapes/*'
  activate :asset_hash
  set :environment, 'production'
end

activate :deploy do |deploy|
  deploy.deploy_method = :rsync
  deploy.host   = 'marsman.marsbased.com'
  deploy.path   = '/home/deploy/apps/marsman'
  deploy.user  = 'deploy'
  deploy.flags = '-avzp --chmod=+r'
end

# activate :email do |email|
#   email.user = 'postmaster@mg.marsbased.com'
#   email.password = 'smtp_pass'
#   email.emails_path= 'emails'
#   email.to_email = 'your.email@whatever.com'
#   email.from_email = 'mailer@mg.marsbased.com'
#   email.port = 587
#   email.domain = 'mg.marsbased.com'
#   email.address = 'smtp.mailgun.org'
# end
