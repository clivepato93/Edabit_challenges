//www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript

function dup(s) {
  //In this example, the regular expression /(.)\1+/g
  // captures any character (.) that occurs one or more
  // times consecutively (\1+). The replace method then
  // replaces these consecutive occurrences with a single
  // instance of the captured character ($1). The g flag
  // ensures that all occurrences are replaced.
  //So, for the input string "hello," the result would
  // be "helo," with the duplicate 'l' removed.
  return s.map((word) => word.replace(/(.)\1+/g, "$1"));
}

console.log(
  dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]),
  ["codewars", "picaniny", "hubububo"]
);
console.log(dup(["abracadabra", "allottee", "assessee"]), [
  "abracadabra",
  "alote",
  "asese",
]);
console.log(dup(["kelless", "keenness"]), ["keles", "kenes"]);
console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"]), [
  "Wolomolo",
  "flodoromonlighters",
  "chuchchi",
]);
console.log(dup(["adanac", "soonness", "toolless", "ppellee"]), [
  "adanac",
  "sones",
  "toles",
  "pele",
]);
console.log(dup(["callalloo", "feelless", "heelless"]), [
  "calalo",
  "feles",
  "heles",
]);
console.log(dup(["putteellinen", "keenness"]), ["putelinen", "kenes"]);
console.log(dup(["kelless", "voorraaddoosspullen", "achcha"]), [
  "keles",
  "voradospulen",
  "achcha",
]);
