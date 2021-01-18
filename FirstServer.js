let http = require ("http")

let ourApp =  http.createServer(function(req, res){
    res.end ("Hellow and welcome")
})

ourApp.listen(3000)