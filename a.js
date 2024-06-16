const myPromise = new Promise((resolve, reject) => {
    const success = false; // Simulating an operation outcome
    if (success) {
        resolve('Operation succeeded!');
    } else {
        reject('Operation failed.');
    }
});
console.log(myPromise);