// https://www.codewars.com/kata/59377c53e66267c8f6000027/solutions/javascript/me/best_practice

function alphabetWar(fight)
{
  const points = { 'w':4, 'p':3, 'b':2, 's':1,'m':4,'q':3,'d':2,'z':1,}
   const left = fight.match(/[wpbs]/g)? fight.match(/[wpbs]/g).reduce((t,c)=>t + points[c],0):0;
  const right = fight.match(/[mqdz]/g)? fight.match(/[mqdz]/g).reduce((t,c)=>t + points[c],0):0;
    return left>right?"Left side wins!":right>left?"Right side wins!":"Let's fight again!";
}

console.log( alphabetWar("z") , "Right side wins!" );
console.log( alphabetWar("zdqmwpbs") , "Let's fight again!" );
console.log( alphabetWar("zzzzs"), "Right side wins!" );
console.log( alphabetWar("wwwwww"), "Left side wins!" );