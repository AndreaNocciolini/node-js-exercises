module.exports ={ 
    print :(msg) => {
        console.log('*_*_*_*_*_*_*_*_*_*_*_*_*');
        console.log(`Testing ${msg}`);
        console.log('*_*_*_*_*_*_*_*_*_*_*_*_*');
    },
    math : (n) => {
        let s = Math.random();
        console.log((s * n).toFixed(2));
    }
};
