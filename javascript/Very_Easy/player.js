// https://edabit.com/challenge/ZngT4zDckDugt2JGY


class Player {
	constructor(name, age, height, weight) {
		this.name = name
		this.age = age
		this.height = height
		this.weight = weight
	}
	
	getAge() {
		return `${this.name} is age ${this.age}`
	}

	getHeight() {
		return `${this.name} is ${this.height}cm`
	}
		
	getWeight() {
		return `${this.name} weighs ${this.weight}kg`
	}
}		


class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		// Write code here!
		if (other.age >this.age){
				return `${other.name} is older than me.`
				} else if(other.age <this.age){
				return `${other.name} is younger than me.`
				} return `${other.name} is the same age as me.`
	}
}