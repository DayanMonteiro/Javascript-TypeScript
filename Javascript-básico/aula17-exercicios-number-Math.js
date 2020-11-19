const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;// apaga o numero 0 preencido no html
texto.innerHTML = ''; // apaga o texto preencido no html


numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>É Nan: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondar para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondar para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;


