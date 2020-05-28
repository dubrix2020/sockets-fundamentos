var socket = io();

// ON escuchan sucesos..
socket.on('connect', function() {
    console.log('Conectado al servisor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//Los emite envian información...
socket.emit('enviarMensaje', {
    usuario: 'Rodrigo',
    mensaje: 'Todo en orden'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Serivor :', mensaje);

});