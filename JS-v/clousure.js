function init() {
    const exemplo = 'Essa variável';

    return function() {
        console.log(`1 - o valor da variável exemplo é: ${exemplo}`);

        return function() {
            console.log(`2 - o valor da variável é: ${exemplo}`);

            return function() {
                console.log(`3 - o valor da variável é: ${exemplo}`);
            }
        }
    }
}

const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();

/*
1 - o valor da variável exemplo é: Essa variável
2 - o valor da variável é: Essa variável
3 - o valor da variável é: Essa variável
*/