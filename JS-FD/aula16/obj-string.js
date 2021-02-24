'dayan'.length
var day = new String('dayan');
console.log(day);
/*
String {"dayan"}
0: "d"
1: "a"
2: "y"
3: "a"
4: "n"
length: 5
*/

// charAt(index) - mostral qual o caractere no indice que for passado para ele
console.log('dayan'.charAt(0)); // d
// também funciona com notação de array
console.log('dayan'[0]); // d
console.log('dayan'[1]); // a
console.log('dayan'[2]); // y
console.log('dayan'[3]); // a
console.log('dayan'[4]); // n

// se passar um item q n existe ele retorna uma string em branco
console.log('dayan'[5]); // undefined


// concat -  ele concatena criando uma nova string
var name = 'Dayan';
var lastName = 'Monteiro';
console.log(name.concat(' Monteiro', ' é meu nome.')); // Dayan Monteiro é meu nome.

// indexOf(string [,star]) - verifica a posição do indice no array
console.log(name.indexOf('y')); // 2 - retorna que a letra y esta no indice 2 do array
console.log(name.indexOf('m')); // -1 - ou seja, não tem a letra extamente como na verifacação de um array
console.log(lastName.indexOf('eir')); // 4 - retorna 4 pq a primeira letra que ele encontra é o (e) passado eir sendo assim retorna o primeiro indice encontrado

// replace(string. newString) -  substitui um trecho do texto por outro texto
console.log(name.replace('n', 'm')); // Dayam - substitui o n por m
// ele cria uma nova string se eu chamar name estará conforme na variável
console.log(name); // Dayan


//.slice(star [end]) - ele retornará os caracteres partir do indice passado
console.log(name.slice(2)) // yan - pegou do indice passado em duante

// se passar 2 valores ele pega do primeiro parametro ate um antes do segundo
console.log(lastName.slice(3, 7)); // teir


// split([separador] [, limit]) - tem um parametro separador e um parametro limite
console.log(name.split()); // [ 'Dayan' ] passa meu nome completo
// se eu quiser quebrar no y, vejamos:
console.log(name.split('y')); // [ 'Da', 'an' ] ele quebrou no y, porém atenção o método remove o indice passado

var arrLastName = lastName.split('t');
console.log(arrLastName); // [ 'Mon', 'eiro' ]
//posso juntar novamente usando o métido join
console.log(arrLastName.join('t')); // Monteiro

// se eu quiser substituir todos os (a) do meu nome por (e) posso juntar 2 métodos
console.log(name.split('a').join('e')); // Deyen

// substring(start [, end]) - faz mais ou menos o mesmo que o slice
console.log(lastName.substring(1, 5)); // onte - pegou do indicie 1 ate o indice 4, lembrande que n pega o ultimo indice do valor passado

// se não passar o segundo parametro ele faz igual ao slice
console.log(lastName.substring(3)); // teiro - pegou do terceiro indice ate o final

// se invertermos os parametros passados, por ex: passar (6, 2) ele pega de tras pra frente
console.log(lastName.substring(6, 2)); /*ntei - ele contou da seguinte forma 
[7=m 6=o 5=n 4=t 3=e 2=i 1=r 0=o] - então o 6 seria o (o) ele n conta o ultimo, 
pulou pro n que era o 5 e andou ate i que era o 2, assim tetornando do 5n - 4t - 3e - 2i */

// toLowerCase() - deixa tudo em caixa baixa
console.log(lastName.toLowerCase()); // monteiro - retirou o M (maiusculo) e colcocou m (minusculo)

// toUpperCase() - deixa tudo em maiusculas
console.log(lastName.toUpperCase()); // MONTEIRO

// se eu quiser deixar apenas um dos indices maiusculos uso 2 métodos juntos
console.log(name.charAt(2).toUpperCase()); // Y - lembrando que ele retira o indice e o converte
