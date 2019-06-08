const fetch = require('node-fetch')

function getTatooineResidents() {
    let tatooineResidents = []

    fetch('https://swapi.co/api/planets/1/')
        .then(response => response.json())
        .then(tatooine => console.log(tatooine.residents))
}
function promiseMeAString(strign) {
    
}

module.exports = {getTatooineResidents, promiseMeAString}

getTatooineResidents()