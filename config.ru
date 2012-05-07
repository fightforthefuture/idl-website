use Rack::Static , :urls => { 
    "/" => "index.html", 
    "/index.html" => "index.html", 
    "/thanks" => "thanks/index.html", 
    "/thanks/" => "thanks/index.html", 
    "/confirm/" => "confirm/index.html", 
    "/confirm" => "confirm/index.html", 
    } , :root => "public"

run Rack::URLMap.new({
  "/"      => Rack::Directory.new("public"),
})
