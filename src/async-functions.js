const fetch = require('node-fetch')

function getTatooineResidents() {
    return fetch('https://swapi.co/api/planets/1/')
        .then(response => response.json())
        .then(tatooine => tatooine.residents)
}
function promiseMeAString(strign) {
    
}

module.exports = {getTatooineResidents, promiseMeAString}