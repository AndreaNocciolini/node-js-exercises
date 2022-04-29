//OS stands for Operating System;
const os = require('os');

console.log('OS platform: ', os.platform()) //read what OS platform as set during the complining of node;

console.log('OS CPU architecture: ', os.arch()) //read the architecture of OS CPU;

console.log('# of logical CPU cores: ', os.cpus().length) //read info about each logical CPU core (here we are just counting them);

console.log('Home directory from current user: ', os.homedir()) //read info about environment;

console.log(`line 1${os.EOL}line 2${os.EOL}line 3`) //useless?
