// https://www.codewars.com/kata/597e31b6829d0b45f2000011/train/javascript

var finalDestination = function(currentPos, directions) {
    var locales = [
      ["Deepwood Motte", "Shadow Tower", "Castle Black", "Eastwatch", "Bay of Seals"],
      [ "The Stony Shore", "Torrhen's Square", "Winterfell", "The Dreadfort", "Karhold"],
      [ "Flint's Finger", "Barrowtown", "Moat Cailin", "White Harbour", "Widow's Wat"],
      [ "Pyke", "Seagard", "The Twins", "Sisterton", "The Fingers"],
      [ "The Crag", "Riverrun", "Darry", "The Eyrie", "Gulltown"],
      [ "Castamere", "Acorn Hall", "Harrenhal", "Maidenpool", "Dragonstone"],
      [ "Lannisport", "Stoney Sept", "King's Landing", "Blackwater Bay", "Sharp Point"],
      [ "High Garden", "Bitterbridge", "King's Wood", "Storm's End", "Evenfall"],
      [ "Old Town", "Horn Hill", "Prince's Pass", "Planky Town", "Sunspear"]
    ];
    //Good luck on the King's Road
    const mapPos=[0,0];
    for (let i = 0; i < locales.length; i++) {
        for (let x = 0; x < locales[i].length; x++) {
            if((locales[i][x])==currentPos){
                mapPos[0]=i
                mapPos[1]=x
                break;
            }    
        }
        
    }

    directions=directions.split(' ');
    // console.log(directions,mapPos[0],mapPos[1])
    directions.forEach(d => {
        // mapPos[0]<0?"The Wall blocks your way"
        if(mapPos[0]<0) return "The Wall blocks your way";
        else if(mapPos[0]>locales.length-1|| mapPos[1]<0 || mapPos[1]>locales[0].length-1) return "You do not have a ship to cross this sea.";

        
        if(d[0]=='N'){
            // console.log( locales[mapPos[0]][mapPos[1]])
            // console.log(typeof +d[1])
            mapPos[0]-= (+d[1])
        } else if(d[0]=='S'){
            mapPos[0]+= (+d[1])
        } else if(d[0]=='E'){
            mapPos[1]+= (+d[1])
        } else if(d[0]=='W'){
            mapPos[1]-= (+d[1])
        } 
        // console.log(mapPos[0],mapPos[1]);
    });
    // console.log(currentPos,directions,mapPos[0],mapPos[1], typeof mapPos[0], typeof mapPos[1])

    if(mapPos[0]<0) return "The Wall blocks your way";
    else if(mapPos[0]>locales.length-1|| mapPos[1]<0 || mapPos[1]>locales[0].length-1) return "You do not have a ship to cross this sea.";
    return locales[mapPos[0]][mapPos[1]];
    // return mapPos[0]>-1 && mapPos[0]<=locales.length-1&& mapPos[1]>-1 && mapPos[1]<=locales[0].length-1?locales[mapPos[0]][mapPos[1]]:false;
    // !=undefined? locales[mapPos[0]][mapPos[1]:"You do not have a ship to cross this sea.";
  }
console.log(finalDestination('Castamere', "N9 S9" ),'The Wall blocks your way');
console.log(finalDestination("King's Landing", "N5"), "Winterfell");
console.log(finalDestination("King's Landing", "N2 W1"), "Riverrun");
console.log(finalDestination("King's Landing", "S2 E2"), "Sunspear");
console.log(finalDestination("Winterfell", "W1 S3"), "Riverrun");
console.log(finalDestination("Winterfell", "S3 W1 S2 W1"), "Lannisport");
console.log(finalDestination("King's Landing", "N7"), "The Wall blocks your way");
console.log(finalDestination("King's Landing", "E3"), "You do not have a ship to cross this sea.");
console.log(finalDestination("King's Landing", "W1 S3"), "You do not have a ship to cross this sea.");
console.log(finalDestination("Winterfell", "S2 W3"), "You do not have a ship to cross this sea.");