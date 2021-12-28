// https://edabit.com/challenge/kGLhgwGaLJsCMS7wS

class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		// Complete the code!
	}
	
	get fullname(){
		return `${this.firstname} ${this.lastname}`
	}
	
	get email(){
			return `${this.firstname}.${this.lastname}@company.com`.toLowerCase()
		}
}