 /* DEBUG
Depuração é o processo de encontrar e reduzir defeitos num aplicativo de software ou mesmo em hardware, site, app etc..
*/

(function(){
    'use strict';
    
    function sum() {
        return Array.prototype.reduce.call(arguments, function(acumulated, item){
            return acumulated + item;
        });
    }
    console.log(sum(1, 21, 32, 4));


    console.log('calculando tempo do for');
    for(var i = 0; i < 10; i++) {
        console.log('calculando...')
    }
    console.timeEnd('Calculando do for');

    /*
    calculando tempo do for
    calculando...
    (node:7856) Warning: No such label 'Calculando do for' for console.timeEnd()
    (Use `node --trace-warnings ...` to show where the warning was created)
    */

    var arr = [
        {item: 'Arroz', price: 'R$ 25,00', weight: '5kg'},
        {item: 'Feijão', price: 'R$ 7,00', weight: '1kg'},
        {item: 'Macarrão', price: 'R$ 5,00', weight: '1kg'},
        {item: 'Carne', price: 'R$ 52,00', weight: '1kg'},
    ];
    console.table(arr);

    /*
        ┌─────────┬────────────┬────────────┬────────┐
        │ (index) │    item    │   price    │ weight │
        ├─────────┼────────────┼────────────┼────────┤
        │    0    │  'Arroz'   │ 'R$ 25,00' │ '5kg'  │
        │    1    │  'Feijão'  │ 'R$ 7,00'  │ '1kg'  │
        │    2    │ 'Macarrão' │ 'R$ 5,00'  │ '1kg'  │
        │    3    │  'Carne'   │ 'R$ 52,00' │ '1kg'  │
        └─────────┴────────────┴────────────┴────────┘
 */

}());