

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

doSomethingPromise()
.then(data => {
    console.log(data.split(''));
    return doOtherThingPromise();
})
.then(data2 => console.log(data2.split('')))
.catch(error => console.log('Ops', error)); 

/*
[
  'F', 'i', 'r', 's',
  't', ' ', 'd', 'a',
  't', 'a'
]
[
  'S', 'e', 'c', 'o',
  'n', 'd', ' ', 'd',
  'a', 't', 'a'
]
*/

/* uma Promise pode ter 3 estados
peding - quando esta pendente, ainda em execução
fulfilled - quando ja terminou de rodar
rejected - rejitada caso aconteça algum erro
*/ 

