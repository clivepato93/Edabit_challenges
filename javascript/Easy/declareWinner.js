// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript




// class Fighter {
//     constructor(name,health,damagePerAttack=0){
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//     }

//     fightDamage(input){
//         console.log(`${this.name}'s health was ${this.health}`)
//         this.health-= input

//         console.log(`${this.name}'s health is now ${this.health}`)
//     }


// }

// const Clive = new Fighter('Clive',10,'5')
// const Poggy = new Fighter('Clive',10,'5')
// Clive.fightDamage(Poggy.damagePerAttack);

// function declareWinner(fighter1, fighter2, firstAttacker) {
//     //   return "Write your code here"; (fighters[0].health<=0)||(fighters[1].health)<=0
//     let t = true
//     const fighters = firstAttacker === fighter1.name?[fighter1,fighter2]:[fighter2,fighter1];
//     console.log(fighters)
//       while(t){
//           if(fighters[0].health<=0) return fighters[0].name
//           else if(fighters[1].health<=0) return fighters[1].name
//           fighters[1].fightDamage(fighters[0].damagePerAttack)
//           fighters[0].fightDamage(fighters[1].damagePerAttack)
//       }
//     //   return fighters
//     // console.log(fighters)
//     }


function declareWinner(fighter1, fighter2, firstAttacker) {
    //   return "Write your code here"; (fighters[0].health<=0)||(fighters[1].health)<=0
    let t = true
    const fighters = firstAttacker === fighter1.name?[fighter1,fighter2]:[fighter2,fighter1];
    console.log(fighters)
      while(t){
          if(fighters[0].health<=0) return fighters[0].name
          else if(fighters[1].health<=0) return fighters[1].name
          fighters[1].health-=fighters[0].damagePerAttack
          fighters[0].health-=fighters[1].damagePerAttack
      }
    //   return fighters
    // console.log(fighters)
    }

    
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");

// console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");

// console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")

// console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")

// console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")

// console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")
