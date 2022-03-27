// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

function warnTheSheep(queue) {

    return queue.indexOf('wolf')!=queue.length-1?`Oi! Sheep number ${queue.length-queue.indexOf('wolf')-1}! You are about to be eaten by a wolf!`:"Pls go away and stop eating my sheep";

}


console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]), "Oi! Sheep number 2! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 5! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");