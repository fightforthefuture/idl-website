use Rack::Static , :urls => { 
    "/" => "index.html", 
    "/index.html" => "index.html", 
    "/thanks" => "thanks/index.html",
    "/thanks/" => "thanks/index.html",
    "/badges/" => "badges/index.html",
    "/badges" => "badges/index.html",
    "/launch/" => "launch/index.html",
    "/launch" => "launch/index.html",
    "/launched/" => "launched/index.html",
    "/launched" => "launched/index.html",
    "/confirm/" => "confirm/index.html", 
    "/confirm" => "confirm/index.html",
    "/faq/" => "faq/index.html", 
    "/faq" => "faq/index.html",
    "/code/" => "code/index.html", 
    "/code" => "code/index.html",
    "/privacy/" => "privacy/index.html", 
    "/privacy" => "privacy/index.html",
    "/members/" => "members/index.html", 
    "/members" => "members/index.html", 
    } , :root => "public"

run Rack::URLMap.new({
  "/"      => Rack::Directory.new("public"),
})
