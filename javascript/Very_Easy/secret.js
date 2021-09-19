// https://edabit.com/challenge/eKNJGfjAAYgEsCerC

function secret(text) {
	const n = text.split('*');
    let string = ''
    for (let index = 0; index < Number(n[1])*2; index++) {
        if (index%2===0){
            string+=`<${n[0]}>`
        } else{
            string+=`</${n[0]}>`
        }
        
    } return string
}

console.log((secret("div*2"),`<div></div><div></div>`))
console.log((secret("p*1"),`<p></p>`))