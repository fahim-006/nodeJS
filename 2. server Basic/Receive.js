let express = require ("express");
const { send } = require("process");

let ourApp = express()

ourApp.use(express.urlencoded({extended:false}));
ourApp.get ('/', function(req, res){
    res.send(`
        <form action="/answer" method= "POST">
        <p> what color is the sky on a clear and sunny day?</p>

        <input name = "skyColor" autocomplete="off">
        <button>Submit</button>
        </form>
    `)
})

ourApp.post('/answer', function(req,res){
    if(req.body.skyColor.toUpperCase() =="BLUE"){
        res.send(`
            <p> Congrats, that is the correct answer</p>
            <a href="/">Back</a>
        `)
    }else{
        res.send(`
            <p> Sorry </p>
            <a href="/">Back</a>
        `)
    }
})

ourApp.listen(3000)