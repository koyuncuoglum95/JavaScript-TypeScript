const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const PORT = 3000;


server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/javascript', (req, res) => {
    res.sendFile(__dirname + '/public/javascript.html');
});

app.get('/css', (req, res) => {
    res.sendFile(__dirname + '/public/css.html');
});

app.get('/swift', (req, res) => {
    res.sendFile(__dirname + '/public/swift.html');
});


// this is tech namespace
const tech = io.of('/tech');

// This following code is basically setup of the live chat socket io
tech.on('connection', (socket) => { // That's when connecting 


    // data.room from index.html room:'javascript'
    socket.on('join', (data) => {
        socket.join(data.room);
        tech.in(data.room).emit('message', `New User joined ${data.room} room!`)
    })

    // data.msg from index.html like let msg = $('#m').val();
    socket.on('message', (data) => { // Storing message into msg parameter
        console.log(`message: ${data.msg}`);
        tech.in(data.room).emit('message', data.msg) // emit allows us to show messages.
    });

    socket.on('disconnect', () => { // That's when disconnecting
        console.log('user disconnected');
        tech.emit('message', 'user disconnected'); // Give us message to user disconnected
    })
})


