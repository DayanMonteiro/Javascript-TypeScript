// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
/*
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 30 * 60 * 24 *1000;
const data = new Date(0 + tresHoras + umDia); // Thu Jan 01 1970 00:00:00 GMT-0300 (Horário Padrão de Brasília)
console.log(data.toString());*/


const data = new Date();
console.log(data.toString(2020, 0, 03, 17, 34, 15, 60)); // Sun Jan 03 2021 17:34:33 GMT-0300 (Horário Padrão de Brasília)
                       //(ano, mês, dia, hora, minuto, segundo, milésimo de segundo)


const data1 = new Date('2021-01-03 17:35:20');
// capturando informações
console.log('Dia', data.getDate()); // Dia 3
console.log('Mês', data.getMonth()); // Mês 0  OBS: começa do 0 ao 11 como um array [0 = jan, 1 = fev, 2 = mar...]
console.log('Ano', data.getFullYear()); // Ano 2021
console.log('Hora', data.getHours()); // Hora 17
console.log('Minutos', data.getMinutes()); // Minutos 52
console.log('Segundos', data.getSeconds()); // Segundos 50
console.log('Milésimos de segundos', data.getMilliseconds()); // Milésimos de segundos 706
console.log('Dia da semana', data.getDay()); // Dia da semana 0 OBS 0 = domingo / 1 = segunda ...
console.log(data1.toString()); // Sun Jan 03 2021 17:35:20 GMT-0300 (Horário Padrão de Brasília)

// caputando a data desde o marco zero
console.log(Date.now()); // 1609708175553 retorna em milésimos de segundos


