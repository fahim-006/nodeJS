let express =  require("express")

let ourApp =  express()

ourApp.use (express.urlencoded({extended:false}))
ourApp.get ('/', function (req, res){
    res.send (`
        <form action = "/answer" method = "POST">
            <p>What color id the sky on a clear and sunny day?</p>
            <input name="skyColor" autocomplete="off"></input>
            <button>submit</button>
        </form>`
    )
})

ourApp.post ('/answer', function (req, res){
    if(req.body.skyColor.toUpperCase() =="BLUE"){
        res.send(`
            <p>Coorect</p>
            <a href="/"> Back </a>
        `)
    }else{
        res.send(`
            <p>Wrong</p>
            <a href="/"> Back </a>
        `)
    }
})

ourApp.listen(3000)