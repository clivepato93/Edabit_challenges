// https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript

function bump(x){
    let bumps = x.match(/n/g)
    bumps= bumps?bumps:[]
    return bumps.length<=15?'Woohoo!':'Car Dead'
}


console.log(bump("n"), "Woohoo!");
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
console.log(bump("______n___n_"), "Woohoo!");