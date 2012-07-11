use Rack::Static , :urls => { 
    "/" => "index.html", 
    "/index.html" => "index.html", 
    "/thanks" => "thanks/index.html",
    "/thanks/" => "thanks/index.html",
    "/badges/" => "badges/index.html",
    "/badges" => "badges/index.html",
    "/launch/" => "launch/index.html",
    "/launch" => "launch/index.html",
    "/confirm/" => "confirm/index.html", 
    "/confirm" => "confirm/index.html", 
    } , :root => "public"

run Rack::URLMap.new({
  "/"      => Rack::Directory.new("public"),
})
