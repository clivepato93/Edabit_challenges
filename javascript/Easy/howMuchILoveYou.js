

function howMuchILoveYou(nb) {
    // your code
 const r={1:'I love you',2:'a little',3:'a lot',4:'passionately',5:'madly',6:'not at all'}
 return r[nb]?r[nb]:r[nb%6]?r[nb%6]:r[6]
}
