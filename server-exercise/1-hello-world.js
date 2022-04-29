const http = require('http')

const requestListener = (req, res) => {
    
    //req and res are both streams, req is a readable one and res a writeable one.
    //req -> request, res -> response;
    
    //the request object belongs to the class IncomingMessage
    //(for more info, search Class: http.incomingMessage at nodejs.org);
    // console.dir(req) //--> this will show the req object normally;
    //console.dir(req, { depth: 0 }) //-->this will show the req object withot nested objects (more readable);


    //the response object  belongs to the class ServerResponse
    //(for more info, search Class: http.serverResponse at nodejs.org);

    console.log(req.url);
    res.write('Hello Nox\n');
    res.end(); //important, needed to end response.
};

const server = http.createServer();
server.on('request', requestListener);

server.listen(4242, () => {
    console.log('Server is running...')
});

//Run node 1-hello-world.js in terminal will execute normally, run nodemon 1-hello-world.js instead will execute normally
//and reload every time we save any change to the file.
//Nodemon has been installed globally through the command line /npm install -g nodemon/.