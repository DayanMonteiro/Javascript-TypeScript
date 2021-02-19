(function(){

/*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
console.log( 'O array em formato de string é:' ); // O array em formato de string é:
console.log([1, 2, 3, 4 , 5].toString()); // '1,2,3,4,5'

/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
var sul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
var sudeste = ['Espirito Santo', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo'];


/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
console.log( '\nAlguns Estados do Brasil:' );
var brasil = sul.concat(sudeste);
console.log(brasil);
/* Alguns Estados do Brasil:
[
  'Paraná',
  'Santa Catarina',
  'Rio Grande do Sul',
  'Espirito Santo',
  'Minas Gerais',
  'Rio de Janeiro',
  'São Paulo'
]
*/

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
console.log( '\nMais estados adicionados:' );
brasil.unshift('Acre', 'Amapá', 'Amazonas');
console.log(brasil);
/*
Mais estados adicionados:
[
  'Acre',
  'Amapá',
  'Amazonas',
  'Paraná',
  'Santa Catarina',
  'Rio Grande do Sul',
  'Espirito Santo',
  'Minas Gerais',
  'Rio de Janeiro',
  'São Paulo'
]
*/

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/
console.log( '\nEstado removido:' );
console.log(brasil.shift());
/*
Estado removido:
Acre
*/

/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
var newSul = brasil.slice(2, 5);

/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil:' );
console.log(newSul)
/*
Estados do Sul do Brasil:
[ 'Paraná', 'Santa Catarina', 'Rio Grande do Sul' ]
*/

/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:' );
console.log(brasil);
/*
[
  'Amapá',
  'Amazonas',
  'Paraná',
  'Santa Catarina',
  'Rio Grande do Sul',
  'Espirito Santo',
  'Minas Gerais',
  'Rio de Janeiro',
  'São Paulo'
]
*/
/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
var nordeste = ['Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe'];

/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:' );
console.log(nordeste);
/*
[
  'Alagoas',
  'Bahia',
  'Ceará',
  'Maranhão',
  'Paraíba',
  'Pernambuco',
  'Piauí',
  'Rio Grande do Norte',
  'Sergipe'
]
*/

/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
var newSudeste = brasil.slice(5);

/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
brasil = brasil.concat(nordeste);

/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:' );
console.log(newSudeste);
/* [ 'Espirito Santo', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo' ]*/

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:' );
console.log(brasil);
/*
[
  'Amapá',               'Amazonas',
  'Paraná',              'Santa Catarina',
  'Rio Grande do Sul',   'Espirito Santo',
  'Minas Gerais',        'Rio de Janeiro',
  'São Paulo',           'Alagoas',
  'Bahia',               'Ceará',
  'Maranhão',            'Paraíba',
  'Pernambuco',          'Piauí',
  'Rio Grande do Norte', 'Sergipe'
]
*/

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
var newBrasil = [];
brasil.forEach(function(item, index) {
  newBrasil.push({
    id: index,
    estado: item
  });
});

/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil:' );
console.log(newBrasil);
/*

newBrasil:
[
  { id: 0, estado: 'Amapá' },
  { id: 1, estado: 'Amazonas' },
  { id: 2, estado: 'Paraná' },
  { id: 3, estado: 'Santa Catarina' },
  { id: 4, estado: 'Rio Grande do Sul' },
  { id: 5, estado: 'Espirito Santo' },
  { id: 6, estado: 'Minas Gerais' },
  { id: 7, estado: 'Rio de Janeiro' },
  { id: 8, estado: 'São Paulo' },
  { id: 9, estado: 'Alagoas' },
  { id: 10, estado: 'Bahia' },
  { id: 11, estado: 'Ceará' },
  { id: 12, estado: 'Maranhão' },
  { id: 13, estado: 'Paraíba' },
  { id: 14, estado: 'Pernambuco' },
  { id: 15, estado: 'Piauí' },
  { id: 16, estado: 'Rio Grande do Norte' },
  { id: 17, estado: 'Sergipe' }
]
*/
/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
// every sempre retorna true ou false e no retorno passou as frases em ternario representando cada opção
var every = brasil.every(function(item) {
  return item.length > 7;
});
console.log(every ? 'Sim, todos os estados tem mais de 7 letras!' : 'Nem todos os estados tem mais de 7 letras!'); 
// Nem todos os estados tem mais de 7 letras!

/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
console.log( '\nCeará está incluído em `brasil`?' );
// some sempre retorna false a menos que pelo menos um dos itens seja true
var some = brasil.some(function(item) {
  return item === 'Ceará';
});
console.log(some ? 'Ceará está incluído!' : 'Ceará não foi incluído :('); // Ceará está incluído!
/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
var map = newBrasil.map(function(item, index) {
  item.id++;
  item.estado += 'pertence ao Brasil';
  return item;
});

/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:' );
console.log(map)
/*
newBrasil agora com mais informações:
[
  { id: 1, estado: 'Amapápertence ao Brasil' },
  { id: 2, estado: 'Amazonaspertence ao Brasil' },
  { id: 3, estado: 'Paranápertence ao Brasil' },
  { id: 4, estado: 'Santa Catarinapertence ao Brasil' },
  { id: 5, estado: 'Rio Grande do Sulpertence ao Brasil' },
  { id: 6, estado: 'Espirito Santopertence ao Brasil' },
  { id: 7, estado: 'Minas Geraispertence ao Brasil' },
  { id: 8, estado: 'Rio de Janeiropertence ao Brasil' },
  { id: 9, estado: 'São Paulopertence ao Brasil' },
  { id: 10, estado: 'Alagoaspertence ao Brasil' },
  { id: 11, estado: 'Bahiapertence ao Brasil' },
  { id: 12, estado: 'Cearápertence ao Brasil' },
  { id: 13, estado: 'Maranhãopertence ao Brasil' },
  { id: 14, estado: 'Paraíbapertence ao Brasil' },
  { id: 15, estado: 'Pernambucopertence ao Brasil' },
  { id: 16, estado: 'Piauípertence ao Brasil' },
  { id: 17, estado: 'Rio Grande do Nortepertence ao Brasil' },
  { id: 18, estado: 'Sergipepertence ao Brasil' }
]
*/

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
// ?

/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:' );
// ?



})();