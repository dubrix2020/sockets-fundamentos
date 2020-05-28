const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado...');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la comunidad'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escucha al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);


        // if (mensaje.usuario) {

        //     callback({
        //         resp: 'Todo salió de maravilla'
        //     });

        // } else {

        //     callback({
        //         resp: 'Todo salió maaaaaaaal...'
        //     });
        // }

    });

});