function steamrollArray(arr) {
    // Recursion is the breakfast of champions. ― Don Stewart
    var steamrolled = [];
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        var subArray = steamrollArray(arr[i]);
        console.log(subArray);
        steamrolled = steamrolled.concat(subArray);
      } else {
        steamrolled.push(arr[i]);
      }
    }
    return steamrolled;
  }
  

console.log(steamrollArray([1, [], [3, [[4],9,[[[0]]]],[5]]]));
// console.log( steamrollArray([1, [2], [3, [[4]]]]));

 