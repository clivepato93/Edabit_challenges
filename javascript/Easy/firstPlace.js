// https://edabit.com/challenge/94rJjLxQbRhoypdCa


function firstPlace(road) {
    const arr = road.match(/[A-Za-z]/g)
    if(!road){
        return 'No road available'
    } else if(!arr){
        return 'No car available'
    } return arr.pop()
}

console.log(firstPlace("====b===O===e===U=A=="), "A")
console.log(firstPlace("e==B=Fe"), "e")
console.log(firstPlace("=========================="), "No car available")
console.log(firstPlace(""), "No road available")
