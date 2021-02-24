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


    // usando delete
    var obj1 = {
        propriedade1: 'propriedade1',
        propriedade2: 'propriedade2',
        propriedade3: 'propriedade3',
    }
    console.log(delete obj1.propriedade1, obj1);

    // porem se eu passar uma variavel utilizando var o delete não consegue deleta dentro do use strict
    (function() {
        var myVar = 2;
        var obj2 = {
            propriedade4: 'propriedade4',
            propriedade5: 'propriedade5',
            propriedade6: 'propriedade6',
        };
        /* não consigo deletar a variável devido ao user strict, mas propriedades eu consigo
        console.log(delete myVar);*/

        // ja propriedades consigo deletar, vejamos:
        console.log(delete obj2.propriedade4, obj2);
    }());

}());


