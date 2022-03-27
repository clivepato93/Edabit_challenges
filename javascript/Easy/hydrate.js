// https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript


const hydrate = (s) => s.match(/[0-9]/g).reduce((t,c)=> t+ +c,0) > 1? `${s.match(/[0-9]/g).reduce((t,c)=> t+ +c,0)} glasses of water`: `${s.match(/[0-9]/g).reduce((t,c)=> t+ +c,0)} glass of water` 


console.log(hydrate("1 beer"), "1 glass of water");
console.log(hydrate("2 glasses of wine and 1 shot"), "3 glasses of water");
console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"), "10 glasses of water");