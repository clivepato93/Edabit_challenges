// https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript


function stockList(listOfArt, listOfCat){
    // ... 
    return listOfCat.map((el,i)=>{
        let total = 0;
        for (let i = 0; i < listOfArt.length; i++) {
            if(el==listOfArt[i][0]) console.log(listOfArt[i])
            
        }
        return ''
    })

  }


  b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
  c = ["A", "B"]
  res = "(A : 200) - (B : 1140)"
console.log(stockList(b, c), res)
  
  b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
  c = ["A", "B", "C", "W"]
  res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
console.log(stockList(b, c), res)