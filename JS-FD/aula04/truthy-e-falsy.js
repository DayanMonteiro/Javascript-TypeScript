/* em uma comparação com bolleanos o truthy é representado por true e o falsy representado por false, vejamos: */


1 === 'b'; 
// false

var teste

if(1) { teste = true; } else { teste = false; }
console.log(teste); // true

if(0) { teste = true; } else { teste = false; }
console.log(teste); // false

/* valores Falsy são:
- undefined   - 0
- null        - -0
-NaN          - " " uma string vazia com as duplas ou simples
*/

if(' '){ teste = true; } else { teste = false; } // false

if('0') { teste = true; } else { teste = false; } // true

if('Dayan') { teste = true; } else { teste = false; } // true

if(undefined) { teste = true; } else { teste = false; } // false

if(null) { teste = true; } else { teste = false; } // false

if() { teste = true; } else { teste = false; } // true

if([] { teste = true; } else { teste = false; }) // true

if(NaN) { teste = true; } else { teste = false; } // false

if(-0){ teste = true; } else { teste = false; } // false

if(false) { teste = true; } else { teste = false; } // false

// descobrir a representação booleana sem usar if

!true // false

!1 // false

!false // true

!! true // true

!!0 // false

!!2 // true

!!'Dayan' // true

!! ' ' // false

!! " " // false

!!NaN // false

!!false // true

!!true // false

!!'0' // true




