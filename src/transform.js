/* --- test data --- */
const childFilterData =[
    {
        name: 'child (17)',
        age: 17
    },
    {
        name: 'ege case (18)',
        age: 18
    },
    {
        name: 'adult (20)',
        age: 20
    }
]

/* --- main --- */

function groupAdultsByAgeRange(persons) {
    return persons.reduce(Sorter, {})
}

function Sorter(list, person) {
    if (!isAdult(person)) {
        return list
    }
    if (below21(person)) {
        if (!list['20 and younger']) {
            list['20 and younger'] = [person]
        } else {
            list['20 and younger'].push(person)
        }
    }
    return list
}

function isAdult(person) {
    return person.age >= 18 ? true : false
}
function below21(person) {
    return person.age < 21 ? true : false
}
function below31(person) {
    return person.age < 31 ? true : false
}
function below41(person) {
    return person.age < 41 ? true : false
}
function below51(person) {
    return person.age < 51 ? true : false
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange

/* --- tests --- */

// isAdult()
function filterOutChildren(persons) {
    return persons.filter(isAdult)
}
//console.log('cf =', filterOutChildren(childFilterData))

console.log('test =', groupAdultsByAgeRange(childFilterData))