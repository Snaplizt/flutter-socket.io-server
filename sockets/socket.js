const {io} = require('../index')
//MEnsajes de sockets
io.on('connection', client => {
    console.log('CLiente conectado')
    client.on('disconnect', () => {  console.log('CLiente desconectado')
});

    client.on('mensaje', (payload)=>{
        console.log('Mensaje',payload);

        io.emit('mensaje', {admin : 'nuevo mensjae'});
    });
  });