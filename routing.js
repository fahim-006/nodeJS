let http = require ("http")

let ourApp =  http.createServer(function(req, res){
    if(req.url=='/')
        res.end ("Hellow and welcome")
    if(req.url == "/about")
        res.end ("about")
    if(req.url == "/signup")
        res.end ("signup")
})

ourApp.listen(3000)