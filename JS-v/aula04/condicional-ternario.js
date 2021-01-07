// condicional ternário praticamente substitui o if

if( 1 === 2) {
    true;
} else {
    false;
} // false

// o mesmo codigo de cima em  condicional ternária 
1 === 2 ? true : false; // false


var pessoa = {sexo: 'Masculino'};
var sexo = 'o';

if(pessoa.sexo === 'Feminino') {sexo = 'a'}

sexo // "o"

var sexo = pessoa.sexo === 'Feminino' ? 'a' : 'o';

sexo // 'o' 

1 ? true : false; // true

var carro = 'string' ? 'porta' : 'janela'; // undefined

carro // porta

var carro = false ? 'porta' : 'janela' // janela
