//More info about server in ../server-exercise/1-hello-world.js;
//More info about ejs in the .ejs files in the views directory;

const express = require('express');

const server = express();

server.set('view engine', 'ejs') //we instruct Express to set the 'view engine' to EJS (previously installed with 'npm i ejs');

server.get('/', (req, res) => {
    // res.send('Hello World!') //needed to send anything to req; with .send() express will invoke .end() automatically;

    res.render('index'); //render will render the file .ejs in the subfolder view (we need to manually create this one);
})
server.get('/about', (req, res) => {
    // res.send('Hello World Page 2!') //needed to send anything to req; with .send() express will invoke .end() automatically;

    res.render('about'); //render will render the file .ejs in the subfolder view (we need to manually create this one);
})

server.listen(4242, () => {
    console.log('Server is running...')
});