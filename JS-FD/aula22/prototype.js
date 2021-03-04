/* prototype - os objetos padrões ex: object, string, date, number etc.. todos eles tem 
uma propriedade chamada prototype onde contem todos os metodos do objeto principal 
que serão herdados sempre que forem criados um novo objeto */

(function(){
    // por ser um construtor por padrão iniciei com letra maiuscula
    function MyFunction(name, lastName) {
        this.fullName = name + ' ' + lastName;
    }
    // a nova função vai herda os parametros da função anterior
    var dayan = new MyFunction('Dayan', 'Monteiro');

    console.log(dayan.fullName); // Dayan Monteiro

    // uma segunda opção é criar 2 this

    // função principal
    function MyFunctionEx02(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    // sendo criada uma nova função fullName para invocar os objetos instanciados na função principal
    MyFunctionEx02.prototype.fullName = function() {
        return this.name + ' ' + this.lastName;
    }

    var dayanEx02 = new MyFunctionEx02('Dayan', 'Monteiro');
    console.log(dayanEx02.fullName());// Dayan Monteiro

    // pode se adicionar novas propriedades após instanciar o objeto porque o prototype mantém a função viva
    MyFunctionEx02.prototype.age = 33;

    console.log(dayanEx02.age); // 33

    // o prototype pode ser subscrito
    MyFunctionEx02.prototype.age = 25; 
    console.log(dayanEx02.age); // 25 agora ele busca o ultimo valor passado

}());