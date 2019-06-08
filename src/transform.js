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
    if (isAdult(person)) {
        return list
    }
    if (below21(person)) {
        !list['20 and younger'] ? list['20 and younger'] = [person] : list['20 and younger'].push(person)
    } else if (below31(person)) {
        !list['21-30'] ? list['21-30'] = [person] : list['21-30'].push(person)
    } else if (below41(person)) {
        !list['31-40'] ? list['31-40'] = [person] : list['31-40'].push(person)
    } else if (below51(person)) {
        !list['41-50'] ? list['41-50'] = [person] : list['41-50'].push(person)
    } else {
        !list['51 and older'] ? list['51 and older'] = [person] : list['51 and older'].push(person)
    }
    return list
}

function isAdult(person) {
    return person.age < 18 ? true : false
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
