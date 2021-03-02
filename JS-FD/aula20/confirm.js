    // método confirm - também pode ser codado como window.confirm - usado para confirmar as informações 

(function(win){

    var del = confirm('Deseja realmente excluir?');

    if(del)
    // quando clica em ok - retorna true
        console.log('Excluído com sucesso!', del);
    else
    // quando clica em cancelar - retorna false
        console.log('Ação cancelada!', del);
}(window));