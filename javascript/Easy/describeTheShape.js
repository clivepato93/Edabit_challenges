// https://www.codewars.com/kata/59a1ea8b70e25ef8e3002992/train/javascript

function describeTheShape( angles ){
    return angles <=2 ? "this will be a line segment or a dot": 
    `This shape has ${angles} sides and each angle measures ${Math.floor(180*(angles+1-3)/angles)}`;
  }


    [
      [6, "This shape has 6 sides and each angle measures 120"],
      [3, "This shape has 3 sides and each angle measures 60"],
      [8, "This shape has 8 sides and each angle measures 135"],
      [90, "This shape has 90 sides and each angle measures 176"],
      [2, "this will be a line segment or a dot"],
      [1, "this will be a line segment or a dot"]
    ].forEach( ([a, exp]) => console.log(describeTheShape(a), exp) );
