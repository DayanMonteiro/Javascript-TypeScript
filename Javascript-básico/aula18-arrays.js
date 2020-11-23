// Arrays
//       array:    0         1          2         
const alunos = ['Dayan', 'Laryssa', 'Pietra']; 
console.log(alunos); // [ 'Dayan', 'Laryssa', 'Pietra' ]
console.log(alunos[0]); // Dayan
console.log(alunos[1]); // Laryssa
console.log(alunos[2]); // Pietra

/*************************************/

// mudando informação dentro do array

const alunos1 = ['Dayan', 'Laryssa', 'Pietra']; 
alunos1[1] = 'Gabriel';
console.log(alunos1);
// [ 'Dayan', 'Gabriel', 'Pietra' ] / perceba que alterou Laryssa para Gabriel no espaço 1 do array
// acrescentando mais um campo no array
alunos1[3] = 'Danilo';
console.log(alunos1);
// [ 'Dayan', 'Gabriel', 'Pietra', 'Danilo' ] podemos observar que acrescentou o 3 campo no array add o nome Danilo

// descobrindo o tamanho do array
console.log(alunos1.length); // 4 

// acrescentando mais campos ao array

const alunos2 = ['Dayan', 'Laryssa', 'Pietra']; 
alunos2[alunos2.length] = 'Julio';
alunos2[alunos2.length] = 'Daniel';
alunos2[alunos2.length] = 'Petria';
console.log(alunos2); // [ 'Dayan', 'Laryssa', 'Pietra', 'Julio', 'Daniel', 'Petria' ]

// outra forma de add é utilizando o push
const alunos3 = ['Dayan', 'Laryssa', 'Pietra']; 

alunos3.push('Ana');
alunos3.push('Daniel');
console.log(alunos3); 
/* 
[ 'Dayan', 'Laryssa', 'Pietra', 'Ana', 'Daniel' ]
OBS: add os novos elementos oa final do array */

// adicionando elementos ao inicio do array
alunos3.unshift('Paulo');
alunos3.unshift('Thays');
console.log(alunos3); 
/*
[
  'Thays',  'Paulo',
  'Dayan',  'Laryssa',
  'Pietra', 'Ana',
  'Daniel'
]
*/

// remover o ultimo elemento
alunos3.pop();
console.log(alunos3);
/*
[ 'Thays', 'Paulo', 
'Dayan', 'Laryssa', 
'Pietra', 'Ana' ]
*/

// salvando o elemento removido
const removido = alunos3.pop();
console.log(removido);
console.log(alunos3);



