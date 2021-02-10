/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = [33, 'Monteiro', null, {a: 1}, function(){}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction( arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myarray)[1]); // Monteiro

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2( arr, index) {
    return arr[ index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myarray2 = ['Dayan', 33.7, true, [1, 2, 'Monteiro'], {b: 2}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(myarray2, 0)); // Dayan
console.log(myFunction2(myarray2, 1)); //33.7
console.log(myFunction2(myarray2, 2)); // true
console.log(myFunction2(myarray2, 3)); // [1, 2, Monteiro]
console.log(myFunction2(myarray2, 4)); // {b: 2}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
    var allBooks = {
        'Clean Code': {
        quantidadePaginas: 1168,
        autor:'Robert C. Martin',
        editora:'Craftsmanship',            
        },
        'Mindset: A nova piscologia do sucesso': {
         quantidadePaginas: 349,
         autor: 'Carol Dweck',
         editora:'Objetiva',    
        },
        'Estruturas de Dados e Algoritmos com JavaScript': {
        quantidadePaginas: 452,
        autor: 'Loiane Groner',
        editora: 'Nova Tec',               
        }
    };
    /*
    if(!bookName) {
        return allBooks;
    }
    return allBooks[bookName];
    */
   return !bookName ? allBooks: allBooks[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book()); /* {Clean Code: {…}, Mindset: A nova piscologia do sucesso: {…}, Estruturas de Dados e Algoritmos com JavaScript: {…}}Clean Code: {quantidadePaginas: 1168, autor: "Robert C. Martin", editora: "Craftsmanship"}Estruturas de Dados e Algoritmos com JavaScript: {quantidadePaginas: 452, autor: "Loiane Groner", editora: "Nova Tec"}Mindset: A nova piscologia do sucesso: {quantidadePaginas: 349, autor: "Carol Dweck", editora: "Objetiva"}__proto__: Object
undefined */

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Clean Code'
console.log('O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!'); // O livro Clean Code tem 1168 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + bookName +  ' é ' + book(bookName).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookName +  ' foi publicado pela editora ' + book(bookName).editora + '.'); 