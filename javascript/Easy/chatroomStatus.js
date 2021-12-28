// https://edabit.com/challenge/hscAGyt4iNZ3PKy3g


function chatroomStatus(users) {
	if (users==false) {
        return "no one online"
    } else if (users.length ==1) {
        return `${users[0]} online`
    } else if (users.length ==2) {
        return `${users.join(' and ')} online`
    } 
    return `${users.slice(0,2).join(', ')} and ${users.length-2} more online`
}


console.log(chatroomStatus([]), "no one online")
console.log(chatroomStatus(["becky325"]), "becky325 online")
console.log(chatroomStatus(["becky325", "malcolm888"]), "becky325 and malcolm888 online")
console.log(chatroomStatus(["becky325", "malcolm888", "fah32fa"]), "becky325, malcolm888 and 1 more online")
console.log(chatroomStatus(["paRIE_to"]), "paRIE_to online")
console.log(chatroomStatus(["s234f", "mailbox2"]), "s234f and mailbox2 online")
console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]), "pap_ier44, townieBOY and 4 more online")
 