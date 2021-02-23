// o this é uma referencia ao window a menos que esteja re referenciando a um objeto local

(function() {
    function myFunction() {
        // esse this referencia o window
        return this;
    }
    console.log('myFunction: ' ,myFunction() === window); // true

    var myObject = {
        myProperty: 1,
        init: function init() {
            // esse this esta dentro do objeto e referencia ao objeto myObject
            return this;
        }
    };
    console.log('myObject: ', myObject.init()); // 1

    // ex do this aplicado como referencia a objeto instanciado

    var newObject = new Object();
    console.log( 'newObject', newObject);

    // criando construtores, geralmente construtores começam com letra maiuscula
    function MyConstructor() {
        this.prop1 = 'prop1';
        this.prop2 = 'prop2';
    }
    var constructor = new MyConstructor();
    console.log('MyConstructor', constructor );
    prop1 = 'propriedade 1';
    console.log(prop1);

})();

