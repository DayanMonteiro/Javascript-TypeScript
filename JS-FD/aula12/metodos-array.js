// join
arr = ['arroz', 'feijão', 'lasanha'];
console.log(arr.join()); // arroz,feijão,lasanha - o join juntou todos os itens do array em uma string

// por padrão o metodo join tras os itens do array separados por virgula, mas posso querer apenas espaçados, vejamos:
console.log(arr.join(' ')); // arroz feijão lasanha
console.log('Meu almoço hoje será ', arr.join(', ')); // Meu almoço hoje será  arroz, feijão, lasanha

// reverse - inverte os itens do array
console.log(arr.reverse()); // [ 'lasanha', 'feijão', 'arroz' ]

console.log(arr.reverse()); // [ 'arroz', 'feijão', 'lasanha' ]

// sort - ordena por ordem alfabética
arr1 = ['arroz', 'feijão', 'lasanha', 'batata frita', 'salada'];
console.log(arr1.sort()); // [ 'arroz', 'batata frita', 'feijão', 'lasanha', 'salada' ]

arr1.push('farofa');
console.log(arr1); // [ 'arroz', 'batata frita', 'feijão', 'lasanha', 'salada', 'farofa' ]

