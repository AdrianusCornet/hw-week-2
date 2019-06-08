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
function filterOutChildren(persons) {
    return persons.filter(person => person.age >= 18)
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange

/* --- tests --- */

console.log('cf =', filterOutChildren(childFilterData))