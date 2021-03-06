# Automatic sitemaps
# activate :slickmap

# CodeRay syntax highlighting in Haml
# activate :code_ray

# Automatic image dimension calculations
# activate :automatic_image_sizes

# Per-page layout changes
# With no layout
# page "/path/to/file.html", :layout => false
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout

# Helpers
helpers do
  def some_helper(*args)
    "Helping"
  end
end


# Change the CSS directory
# set :css_dir, "alternative_css_directory"



# Change the JS directory
# set :js_dir, "alternative_js_directory"



# Change the images directory
# set :images_dir, "alternative_image_directory"


# Build-specific configuration
configure :build do
  activate :minify_css
  
  # Minify Javascript on build
  # activate :minify_javascript
  
  # Shrink/smush PNG/JPEGs on build
  # activate :smush_pngs
  
  # Enable cache buster
  # activate :cache_buster

  # Generate ugly/obfuscated HTML from Haml
  # activate :ugly_haml

  
  # Or use a different image path
  # set :http_path, "/Content/images/"
end