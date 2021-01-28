
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`; // colocar um 0 a esqueda caso na data seja necessário
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano =  zeroAEsquerda( data.getFullYear());
    const hora =  zeroAEsquerda(data.getHours());
    const min =  zeroAEsquerda( data.getMinutes());
    const seg =  zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}.`

}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil); // 3/1/2021 18:25:44.
// após inserir a função zero a esquerda o resultado vem como 03/01/2021 18:30:03.




