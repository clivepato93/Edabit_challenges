// https://www.codewars.com/kata/583ade15666df5a64e000058/train/javascript


function evensAndOdds(num){
	//your code here
    return num%2==0?num.toString(2):num.toString(16)
}


console.log(evensAndOdds(2,'10'));
console.log(evensAndOdds(13,'d'));
console.log(evensAndOdds(47,'2f'));
console.log(evensAndOdds(0,'0'));
console.log(evensAndOdds(12800,'11001000000000'));
console.log(evensAndOdds(8172381723,'1e71ca61b'));