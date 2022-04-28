// const now = performance.now();

// function theOneFunc(n){
// console.log(`hello after ${n} seconds`);
// }

// setTimeout(theOneFunc, 4 * 1000, 4);
// setTimeout(theOneFunc, 8 * 1000, 8);

let counter = 0;

const myTimer = setInterval(() => {
    if(counter <= 4){
        console.log(`Hello World!!!`);
        counter++
    }
    else if (counter === 5) {
        console.log('done');
        clearInterval(myTimer);
    }
}, 1 * 1000);