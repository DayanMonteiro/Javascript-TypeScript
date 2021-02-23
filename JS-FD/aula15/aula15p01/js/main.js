var name = 'Global';
(function() {
    var name = 'Local';
    console.log(name);
})();
console.log(name);