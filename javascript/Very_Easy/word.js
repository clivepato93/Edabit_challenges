// https://edabit.com/challenge/ghkYG7dnSKd5NWoyt

function word(s) {
	return {"one":1,
            "two":2,
            'three':3,
            "four":4,
            "five":5,
            "six":6,
            "seven":7,
            "eight":8,
            "nine":9,
            "zero":0
    }[s];
}

console.log(word("zero"), 0)
console.log(word("one"), 1)
console.log(word("two"), 2)
console.log(word("three"), 3)
console.log(word("four"), 4)
console.log(word("five"), 5)
console.log(word("six"), 6)
console.log(word("seven"), 7)
console.log(word("eight"), 8)
console.log(word("nine"), 9)