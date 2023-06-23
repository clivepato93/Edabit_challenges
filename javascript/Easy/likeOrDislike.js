//https://www.codewars.com/kata/62ad72443809a4006998218a/train/javascript

const likeOrDislike = (buttons) => {
  return buttons.reduce((p, c) => (p === c ? Nothing : c), Nothing);
};

console.log(likeOrDislike([Dislike]), Dislike);
console.log(likeOrDislike([Like, Like]), Nothing);
console.log(likeOrDislike([Dislike, Like]), Like);
console.log(likeOrDislike([Like, Dislike, Dislike]), Nothing);

console.log(likeOrDislike([Dislike, Dislike]), Nothing);
console.log(likeOrDislike([Like, Like, Like]), Like);
console.log(likeOrDislike([Like, Dislike]), Dislike);
console.log(likeOrDislike([Dislike, Like, Dislike]), Dislike);
console.log(
  likeOrDislike([Like, Like, Dislike, Like, Like, Like, Like, Dislike]),
  Dislike
);
console.log(likeOrDislike([]), Nothing);
