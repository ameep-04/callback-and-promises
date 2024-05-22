function sumAscync(a, b, callback) {
    setTimeout(() => {
        const result = a+b;
        callback(result);
    },1000);
}

sumAscync(3,7,(result) => {
    console.log(result);
});