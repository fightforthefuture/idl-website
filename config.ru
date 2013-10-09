require 'rack-rewrite'

use Rack::Static , :urls => { 
    "/" => "index.html", 
    "/details/1.html" => "details/1.html", 
    "/details/2.html" => "details/2.html", 
    "/index.html" => "index.html", 
    "/thanks" => "thanks/index.html",
    "/thanks/details.html" => "thanks/details.html",
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
    "/privacy/" => "privacy/index.html", 
    "/privacy" => "privacy/index.html",
    "/members/" => "members/index.html", 
    "/members" => "members/index.html",
    "/branding/" => "branding/index.html", 
    "/branding" => "branding/index.html", 
    "/international/" => "international/index.html", 
    "/international" => "international/index.html", 
    } , :root => "public"
    
use Rack::Rewrite do
r301 %r{^/code}, 'https://members.internetdefenseleague.org'
# r301 %r{/posts(.*)}, 'http://stickwithjosh.github.com/posts$1'
end


run Rack::URLMap.new({
  "/"      => Rack::Directory.new("public"),
})
