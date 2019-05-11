console.log('CardServer');
const modHTTP = require('http');
const modCardGameApplication = require('./CardGame/CardGameApplication.js');

const PORT = process.env.PORT || 3300;

const server = modHTTP.createServer(modCardGameApplication);

server.listen(PORT);
