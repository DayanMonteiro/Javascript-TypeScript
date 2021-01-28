// é representado por  ? : 


// comparando usuários se tiver mais mil pontos é vip menos não é
const pontuacaoUsuario = 1002;

if (pontuacaoUsuario >= 1000) { 
    console.log('Usuário VIP')
} else {
    console.log('Usuário normal');
}

// o mesmo código usando operação ternaria

const pontuacaoUsuarioEx2 = 1050;
const nivelUsuario = pontuacaoUsuarioEx2 >= 1000 ? 'Usuário VIP' : 'Usuário normal';3

const corUsuario = 'vermelha'; // caso o usuoário n selecione uma cor
const corPadrao = corUsuario || 'preta' // a cor preta q é padrão será usada

console.log(nivelUsuario, corPadrao);