const my_first_module = require('./index');
const my_first_template = require('./first-template');

const print = my_first_module.print;
const math = my_first_module.math;

const http = require('http');

const server = http.createServer((req, res) => {
res.end(my_first_template('My Title', Math.random().toFixed(2)));
});

server.listen(3000, () => {
console.log('Server is running...');
});

print('Hello World!!');
print('Ciao');

setTimeout(print, 5 * 1000, 'Nox');
math(0,8);

setTimeout(math, 2 * 1000, 416);