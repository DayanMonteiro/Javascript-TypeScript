

const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
     setTimeout(function() {
        // did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () =>
new Promise((resolve, reject) => {
    setTimeout(function(){
        // did something
        resolve('Second data');
    }, 1000);
});

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
});

// [ 'First data', 'Second data' ]
