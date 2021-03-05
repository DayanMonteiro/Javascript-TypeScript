(function(win, doc){
    'use strict';
/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:
- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;
- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

// criando as variáveis
var $visor = doc.querySelector('[data-js="visor"]');
var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
var $buttonCE = doc.querySelector('[data-js="button-ce"]');
var $buttonEqual = doc.querySelector('[data-js="button-equal"]');


// capturar os botões criando um array-like
Array.prototype.forEach.call($buttonsNumbers, function(button){
    button.addEventListener('click', handleClickNumber, false);
});

Array.prototype.forEach.call($buttonsOperations, function(button) {
    button.addEventListener('click', handleClickOperation, false);
});
// eventos para os botões
$buttonCE.addEventListener('click', handleClickCE, false );
$buttonEqual.addEventListener('click', handleClickEqual, false);

// especificando a função de cada botão
function handleClickNumber() {
    // o this referecia o button
    $visor.value += this.value;  
}

function handleClickOperation() {  
    removeLastItemIfIsAnOperator();
    $visor.value += this.value;
}

function handleClickCE() {
    $visor.value = 0;
}

function isLastItemOperation() {
    /* verifica antes de adicionar o valor, ele precisa remover o ultimo item 
    se o mesmo já tiver sido uma das operações */
    var operations = ['+', '-', 'x', '÷'];
    /* capturar o ultimo item do value e verificar se ele é uma operação - split('') 
    quebra em um array - pop() vai pegar o ultimo item e colocar no lastItem */
    var lastItem = $visor.value.split('').pop();
    /* verificando se pe um operador, o some passa por todos os itens do array 
    e verifica se pelo menos um deles existe no retorno, se for retorna true, 
    se for ele retorna true e remove o ultimo item */
    return operations.some(function(operator){
        return operator === lastItem;
    });
}

function removeLastItemIfIsAnOperator() {
     // se o ultimo for uma dessas operações
     if(isLastItemOperation()){
        /* remova o ultimo item dessa operação, o slice vai pegar 
        desde o indice 0 e ao final remover -1 o ultimo item */
        $visor.value = $visor.value.slice(0, -1);
        }
}

function handleClickEqual(){
    removeLastItemIfIsAnOperator();
}

}(window, document));