// ex 00
const array = [1, 2, 3];
array.push(4);
array[0] = 'Dayan';

console.log(array); // [ 'Dayan', 2, 3, 4 ]

// ex 01
const pessoa1 = {
    nome: 'Dayan',
    sobrenome: 'Monteiro',
    idade: 33
};

console.log(pessoa1.nome); // Dayan
console.log(pessoa1.sobrenome); // Monteiro
console.log(pessoa1.idade); // 33

/* ex 02  e se eu quisesse inserir várias pessoas com nome sobrenome e idade */

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa2 = criaPessoa('Dayan', 'Monteiro', 33);
const pessoa3 = criaPessoa('Laryssa', 'Viana', 24);
const pessoa4 = criaPessoa('Pietra', 'Viana', 2);

console.log(pessoa2.nome, pessoa3.nome); // Dayan Laryssa
console.log(pessoa4.nome, pessoa4.sobrenome, pessoa4.idade); // Pietra Viana 2

// ex 03

const pessoa5 = {
    nome: 'Danilo',
    sobrenome: 'Monteiro',
    idade: 37,

    fala() {
        console.log('Olá mundo!');
        console.log( `${this.nome} ${this.sobrenome} está falando oi...`);
        console.log( `A minha idade atual é ${this.idade}`);
    },

    fezAniversario() {
        this.idade++;
    }
};

pessoa5.fala(); // Olá mundo!
// Danilo Monteiro está falando oi...
// A minha idade atual é 37
pessoa5.fezAniversario();
pessoa5.fala(); // A minha idade atual é 38
pessoa5.fezAniversario();
pessoa5.fala();
/*
Danilo Monteiro está falando oi...
A minha idade atual é 39
*/
pessoa5.fezAniversario();
pessoa5.fala();
/*
Danilo Monteiro está falando oi...
A minha idade atual é 40
*/
pessoa5.fezAniversario();
pessoa5.fala();
/*
Danilo Monteiro está falando oi...
A minha idade atual é 41
*/