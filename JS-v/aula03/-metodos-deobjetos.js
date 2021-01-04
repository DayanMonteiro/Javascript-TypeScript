myvar = function() {
    return 'variável myvar'
}

console.log(myvar); // [Function: myvar]
console.log(myvar()); // variável myvar

var pessoa = {nome: 'Dayan', idade: 33, altura: 1.75, peso: 85 }
console.log(pessoa); // { nome: 'Dayan', idade: 33, altura: 1.75, peso: 85 }

pessoa = {sexo: 'masculino'}
console.log(pessoa); // { sexo: 'masculino' }

pessoa =  {nome: 'Dayan', idade: 33, altura: 1.75, peso: 85, sexo: 'masculino' };
console.log(pessoa); // { nome: 'Dayan', idade: 33, altura: 1.75, peso: 85, sexo: 'masculino' }

pessoa.cor = 'caucasiano';
console.log(pessoa); 
/*
{
  nome: 'Dayan',
  idade: 33,
  altura: 1.75,
  peso: 85,
  sexo: 'masculino',
  cor: 'caucasiano'
}
*/

pessoa.andar = function() {
    return "Pessoa andando";
}
console.log(pessoa); 
/*
{
  nome: 'Dayan',
  idade: 33,
  altura: 1.75,
  peso: 85,
  sexo: 'masculino',
  cor: 'caucasiano',
  andar: [Function (anonymous)]
}
*/
console.log(pessoa.andar()); // Pessoa andando


pessoa.aniversario = function() {
    pessoa.idade++;
}

console.log(pessoa.aniversario()); // undefined
// porem ao invocar pessoa novamente ele tera subido 1 ano em minha idade
console.log(pessoa); 
/*
{
  nome: 'Dayan',
  idade: 34,
  altura: 1.75,
  peso: 85,
  sexo: 'masculino',
  cor: 'caucasiano',
  andar: [Function (anonymous)],
  aniversario: [Function (anonymous)]
}
*/

pessoa.sobrenome = 'Monteiro'
console.log(pessoa);
/*
{
  nome: 'Dayan',
  idade: 34,
  altura: 1.75,
  peso: 85,
  sexo: 'masculino',
  cor: 'caucasiano',
  andar: [Function (anonymous)],
  aniversario: [Function (anonymous)],
  sobrenome: 'Monteiro'
}
*/

pessoa.nomeCompleto = function() {
    return pessoa.nome + ' ' + pessoa.sobrenome;
}
console.log(pessoa);
/*
{
  nome: 'Dayan',
  idade: 34,
  altura: 1.75,
  peso: 85,
  sexo: 'masculino',
  cor: 'caucasiano',
  andar: [Function (anonymous)],
  aniversario: [Function (anonymous)],
  sobrenome: 'Monteiro',
  nomeCompleto: [Function (anonymous)]
}
*/
console.log(pessoa.nomeCompleto()); // Dayan Monteiro



