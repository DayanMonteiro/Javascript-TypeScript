const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch(diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
        return diaSemanaTexto; 
        case 1:
            diaSemanaTexto = 'Segunda-feira';
        return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
        return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
        return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
        return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
        return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
        return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
        return diaSemanaTexto; 
    }
}

function getNomeMes(numeroMes) {
    let diaSemanaTexto;

    switch(numeroMes) {
        case 0:
            diaSemanaTexto = 'Domingo';
        return diaSemanaTexto; 
        
        
}


h1.innerHTML =  getDiaSemanaTexto(data.getDay());
