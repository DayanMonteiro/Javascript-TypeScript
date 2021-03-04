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





}());