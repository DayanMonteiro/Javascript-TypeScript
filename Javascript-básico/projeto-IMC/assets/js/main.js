// capturar evento de submit do formulário

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} = ${nivelImc}. `

    setResultado(msg, true);
});

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2); /* vai retornar com 2 casas decimais */ 
}

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso Ideal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    /* calculei do ultimo resultado para o primeiro porque caso retorne acaba a função
    sendo assim se eu fizesse do menor para o maior ao achar o primeiro return ja finalizaria a função
    dessa forma eu não teria como percorrer todas as opções. */
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4]; 
    if (imc >= 29.9) return nivel[3]; 
    if (imc >= 24.9) return nivel[2]; 
    if (imc >= 18.5) return nivel[1];   
    if (imc < 18.5) return nivel[0];
}


    // criando parágrafo em javascript
function criarParagrafo () {
    const p = document.createElement('p');
    return p;   
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; 
    // colcoando o paragrafo dentro do resultado
    const p = criarParagrafo();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }


    p.innerHTML = msg
    resultado.appendChild(p)

}