// https://www.codewars.com/kata/5982619d2671576e90000017/train/javascript

function spongeMeme(sentence) {
  return [...sentence.toLowerCase()].map((el,i) => i%2==0?el.toUpperCase():el.toLowerCase()).join('')
}

console.log(spongeMeme("stop Making spongebob Memes!"), 'StOp mAkInG SpOnGeBoB MeMeS!')
console.log(spongeMeme("colored teens cant Be successful in tech"), 'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh')