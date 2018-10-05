var net = require('net');

const PORT = 18000;
const HOST = '192.168.2.115';

var clientHandler = function(socket){
    console.log('someone connected');

    socket.on('data', function dataHandler(data){
        console.log(socket.remoteAddress, socket.remotePort, 'send', data);
    })

    socket.on('close', function(){
        console.log(socket.remoteAddress, socket.remotePort, 'disconncted');
    })
};

var app = net.createServer(clientHandler);

app.listen(PORT, HOST)
console.log('tcp server running on tcp://', HOST, ':', PORT);