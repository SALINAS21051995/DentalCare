const express = require('express');
const server  = express();
//settings
server.set('port', process.env.PORT || 3000);

server.set('views', 'server/views');
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');
//Middlewares
server.use(express.json());
//server.use(express.static('public'))
server.use(express.static(__dirname + '/public'));

server.all("/*", function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    return next();
});

module.exports = server;