let http = require ("http")

let ourApp = http.createServer (function(req,res){
    if (req.url == '/'){
        res.end("WELCOME")
    }

    if (req.url == '/about'){
        res.end("about")
    }
    else
        res.end("Not a URL")
})

ourApp.listen(3000)