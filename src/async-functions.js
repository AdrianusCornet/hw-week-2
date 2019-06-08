const fetch = require('node-fetch')

function getTatooineResidents() {
    return fetch('https://swapi.co/api/planets/1/')
        .then(response => response.json())
        .then(tatooine => tatooine.residents)
}
function promiseMeAString(strign) {
    return new Promise((resolve, reject) => {
        if (typeof strign === 'string') resolve('You kept the Promise!')
        reject('You have failed me!')
    })
}

module.exports = { getTatooineResidents, promiseMeAString }