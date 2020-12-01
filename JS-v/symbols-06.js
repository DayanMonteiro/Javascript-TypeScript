const uniqueId = Symbol('hello');


Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = 'Dayan Monteiro';

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return{
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            } 
        };
    } 
};


// generators

function hello() {
    console.log('hello');
    console.log('from');
    console.log('function!');
}

hello();
/*
hello
from
function!
*/