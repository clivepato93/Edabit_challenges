

function getDrinkByProfession(p){
    return {'Jabroni':  "Patron Tequila",
            "School counselor":"Anything with Alcohol",
            "Programmer": "Hipster Craft Beer",
            "Bike gang member":"Moonshine",
            "Politician":"Your tax dollars",
            "Rapper":"Cristal"}[(p.slice(0,1).toUpperCase())+p.slice(1).toLowerCase()]|| 'Beer'
  }

  console.log(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
console.log(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
console.log(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");
