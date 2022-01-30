

const rps = (p1, p2) => {
    // const options = ['rock','scissors','paper'];
    // const result = options.indexOf(p2)-options.indexOf(p1);
    // const result = [options.indexOf(p1),options.indexOf(p2)];
    // console.log(result);
    // return result<0?'Player 1 won!':result==0?'Draw':'Player 2 won!'
    if(p1==p2) return 'Draw!';
    if(p1=='scissors'&& p2=='paper') return 'Player 1 won!';
    if(p1=='paper' && p2=='rock') return 'Player 1 won!';
    if(p1=='rock' && p2=='scissors') return 'Player 1 won!';
    return 'Player 2 won!'
};

console.log(rps('rock', 'rock'), 'Draw!');
console.log(rps('scissors', 'scissors'), 'Draw!');
console.log(rps('paper', 'paper'), 'Draw!');
console.log(rps('scissors', 'rock'),'Player 2 won!');
console.log(rps('paper', 'scissors'), 'Player 2 won!');
console.log(rps('rock', 'paper'), 'Player 2 won!');
console.log(rps('rock', 'scissors'), 'Player 1 won!');
console.log(rps('scissors', 'paper'), 'Player 1 won!');
console.log(rps('paper', 'rock'), 'Player 1 won!');