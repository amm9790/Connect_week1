//Epress is a node module for building HTTP servers
var express = require('expess');
var app = express();

//Tell Express to look in the "public" director for any files, first!
app.use(express.static("public"));

//The defult route of / and what to do!
app.get("/", function(req, res){
    res.send("<html><body><h1>Hello Hello thank you for connecting!</h1></body></httml")});

    app.listen(80);


