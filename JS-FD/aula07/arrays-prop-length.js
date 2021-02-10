// arrays a propriedade length


var arr = ['Dayan', null, true, {guitarra: 'nova'}, function() {}];

console.log(arr.length); // 5

// como mostrar o conteúdo de todos os elementos do array
var qtd = arr.length;

while(qtd > 0) {
    console.log(arr[--qtd ]);
}
/*
[Function (anonymous)]
{ guitarra: 'nova' }
true
null
Dayan
*/

qtd = arr.length

while(qtd > 0) {
    console.log(arr[--qtd]);
    if(qtd === 3) { // quando ele chegar no campo 3 ele é um objeto a guitarra nova
        console.log(arr[qtd].guitarra);
    } 
}
/*
[Function (anonymous)]
{ guitarra: 'nova' }
nova
true
null
Dayan
*/

