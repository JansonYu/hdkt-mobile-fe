var ip = require('ip');
var express = require('express');

var app = express();

app.use("/", express.static(__dirname + '/'));

var config = {
    server_host: ip.address(),
    server_port: process.env.PORT || 3009,
};

app.listen(config.server_port, config.server_host, function (){
    console.log('[%s] server running at http://%s:%d/...', 'test', config.server_host, config.server_port);
});