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
    
}

function isAdult(person) {
    return person.age >= 18 ? true : false
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange

/* --- tests --- */

// isAdult()
function filterOutChildren(persons) {
    return persons.filter(isAdult)
}
//console.log('cf =', filterOutChildren(childFilterData))

