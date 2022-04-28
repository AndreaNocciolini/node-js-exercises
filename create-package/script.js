const my_first_package = require('./frame-print/index');

const print = my_first_package.print;
const math = my_first_package.math;

print('Hello World!!');
print('Ciao');

setTimeout(print, 5 * 1000, 'Nox');

math(32);
math(0,8);

setTimeout(math, 2 * 1000, 416);