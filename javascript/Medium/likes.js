// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
    // TODO

    if(!names.length) return 'no one likes this';
    return names.reduce((final,c,i)=>{
        //  if(names.length==0) return 'no one likes this';
        if(i==0) final+ `${c}` 

        else if(i==1) return final+ ` and ${c}`

        else if(i==2) return final+

    },'')


  }

console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this'); 