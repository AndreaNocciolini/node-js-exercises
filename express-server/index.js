//More info about server in ../server-exercise/1-hello-world.js
const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Hello Express') //needed to send anything to req; with .send() express will invoke .end() automatically;
})
server.get('/try', (req, res) => {
    res.send('Hello Second Page Express') //needed to send anything to req; with .send() express will invoke .end() automatically;
})

server.listen(4242, () => {
    console.log('Server is running...')
});