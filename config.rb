require "lib/helpers"
helpers Helpers

set :relative_links, true

activate :sprockets
activate :autoprefixer
activate :pry
activate :directory_indexes
activate :sprockets3_sassc
activate :relative_assets

configure :development do
  activate :livereload, no_swf: true
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
      proxy @path, r.path, :locals => { :versions => version }
    end
  end
end

configure :build do
  ignore 'shapes/*'
  activate :asset_hash, ignore: /assets/
  set :environment, 'production'
  #set :http_prefix, '/marsman'
end
