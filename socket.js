var express = require('express');
var app = express()
server = require('http').Server(app);
var io = require('socket.io').listen(server)
server.listen(80)

app.get('/',(req,res)=>{
  console.log(".....///");
  res.sendfile(__dirname+'/socket.html')
});

// app.get('/hello',(req,res)=>{
//   res.send("hello")
// })

io.on('connect',(socket)=>{
  socket.on('room',(data)=>{
    console.log(data)
    var arr = Object.keys(io.sockets.connected)
//    for(var i = 0;i<arr.length;++i){
  //    io.sockets.connected[arr[i]].emit('bbb','qwe')
  //  }
    socket.broadcast.emit('room',data)
  })
})
