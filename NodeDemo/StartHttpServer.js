var HttpServer = require("./HttpServer");
var server = new HttpServer();
server.start("0.0.0.0", 8080, function(err) {
    if (err) {
        console.log(err);
    }
});