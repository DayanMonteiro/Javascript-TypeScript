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

function* hello() {
    console.log('hello');
        yield;
    console.log('from');
        yield
    console.log('function!');
}

const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next());



/*
hello
{ value: undefined, done: false }
from
{ value: undefined, done: false }
function!
{ value: undefined, done: true }
*/