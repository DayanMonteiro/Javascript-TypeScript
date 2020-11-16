const nome = 'Dayan';
const sobreNome = 'Monteiro';
const idade = 33;
const peso = 89;
const altura = 1.75;
let imc = (peso / (altura * altura));
let anoNascimento = 2020 - idade;

console.log(nome, sobreNome, "tem", idade, "anos, pesa", peso, "kg" );
console.log("tem", altura, "de altura e seu IMC é de", imc);
console.log(nome, sobreNome, "nasceu em", anoNascimento);

/* 
Dayan Monteiro tem 33 anos, pesa 89 kg
tem 1.75 de altura e seu IMC é de 29.06122448979592
Dayan Monteiro nasceu em 1987
*/

// outra opção é utilizando o sinal de + vejamos:

console.log(nome + ' ' + sobreNome + " tem " + idade + " anos, pesa " + peso + "kg" );

// template strings
console.log(`tem ${altura} de altura e seu IMC é de, ${imc}`);
console.log(`${nome}  ${sobreNome} nasceu em ${anoNascimento}`);



