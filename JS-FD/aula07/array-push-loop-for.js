var arr = [ 1, 2, 3, 'Dayan', {guitarra: 'Gibson'}];

console.log(arr); // [ 1, 2, 3, 'Dayan', { guitarra: 'Gibson' } ]

console.log(arr.length); // 5

// dicionando itens no array
arr.push({violao: 'Epiphone'});

console.log(arr.length); // 6

console.log(arr); // [ 1, 2, 3, 'Dayan', { guitarra: 'Gibson' }, { 'violao': 'Epiphone' } ]

console.log(arr[5].violao); // Epiphone

arr.push(['do', 're', 'mi', 'fa', 'sol', 'la', 'si']);

console.log(arr.length); // 7

console.log(arr);
/*
[
  1,
  2,
  3,
  'Dayan',
  { guitarra: 'Gibson' },
  { violao: 'Epiphone' },
  [
    'do',  're',
    'mi',  'fa',
    'sol', 'la',
    'si'
  ]
]
*/

// chamando parte de um array filho
console.log(arr[6][3]); // fa



/* estrutura de repetição (loop) 
for(init, condition, final-expression)
*/

for(var num = 0; num < 20; num++) {
    console.log(num);
}
/*
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
*/


for( var num = 2, arroz = 3; num < 5; num++ ) {
    console.log(num);
    console.log(arroz++);
}
