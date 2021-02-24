/* use strict - é uma diretiva que vai dizer ao browser que tudo que 
estiver dentro daquele escopo da função esta em escopo estrito. outro detalhe é 
que o use strict n ermite o uso de variáveis sem o var
*/
(function(){
    'use strict';
    var myName = 'Dayan Monteiro';
    console.log(myName);
}());

(function(){
    var obj = {
        prop1: {
            prop2: {
                prop3: {
                    prop31: 'prop31',
                    prop32: 'prop32',
                    prop33: 'prop33'
                }
            }
        }
    };

    console.log(obj.prop1.prop2.prop3);

    // with - with (expressão) declaração. expressão: Adiciona a dada expressão à cadeia de escopo quando estiver avaliando a declaração.
    with(obj.prop1.prop2.prop3) {
        console.log(prop31, prop32, prop33);
    };
}());

(function(){
    'use strict';
    function Person( name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    console.log(new Person('Dayan', 'MOnteiro', 33));
}());
