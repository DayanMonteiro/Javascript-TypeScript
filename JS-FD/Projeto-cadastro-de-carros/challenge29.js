    /*
    Vamos estruturar um pequeno app utilizando módulos.
    Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
    A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
    seguinte forma:
    - No início do arquivo, deverá ter as informações da sua empresa - nome e
    telefone (já vamos ver como isso vai ser feito)
    - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
    um formulário para cadastro do carro, com os seguintes campos:
      - Imagem do carro (deverá aceitar uma URL)
      - Marca / Modelo
      - Ano
      - Placa
      - Cor
      - e um botão "Cadastrar"
    Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
    carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
    aparecer no final da tabela.
    Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
    empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
    Dê um nome para a empresa e um telefone fictício, preechendo essas informações
    no arquivo company.json que já está criado.
    Essas informações devem ser adicionadas no HTML via Ajax.
    Parte técnica:
    Separe o nosso módulo de DOM criado nas últimas aulas em
    um arquivo DOM.js.
    E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
    que será nomeado de "app".
    */
(function($) {
  'use strict';

    function app() {
      return {
        init: function() {
          console.log('app init');
          // método companyInfo
          this.companyInfo();
          this.initEvents();
        },

        initEvents: function initEvents() {
          $('[data-js="form-register"]').on('submit', this.handleSubmit);
        },

        handleSubmit: function handleSubmit(e) {
          e.preventDefault();
          console.log('submit');
        }

        // passando a função para o método
        companyInfo: function companyInfo() {
          // metodo ajax para trazer as informações
          /* XMLHttpRequest é um objeto que fornece funcionalidade ao cliente para transferir dados entre um cliente e um servidor. Ele fornece uma maneira fácil de recuperar dados de um URL sem ter que fazer uma atualização de página inteira. */
          var ajax = new XMLHttpRequest();
          // ajax.open - para abrir a conexão / metodo GET para buscar o conteudo do company.json / e true para chamar de forma assincrona
          ajax.open('GET', './/company.json', true);
          // para buscar o company.json
          ajax.send();
          // adicionar o vendo e a captura dos dados e atualizar o html trazendo as informações e passar o false no fim para manter o padrão do addEventListener
          ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
        },
        // metodo para trazer o resultado
        getCompanyInfo: function getCompanyInfo() {
          if(!app().isReady.call(this)) {
            return;
          }

            var data = JSON.parse(this.responseText);
            var $companyName = $('[data-js="company-name"]').get();
            var $companyPhone = $('[data-js="company-phone"]').get();
            $companyName.textContent = data.name;
            $companyPhone.textContent = data.phone;
          },

          isReady: function isReady() {
            return this.readyState === 4 && this.status === 200;
          }
      };     
    }

    app().init();
  
  })(window.DOM);