// https://www.codewars.com/kata/58fd91af13b0012e8e000010/train/javascript

function strangeCoach(players) {
  //coding and coding..
  const obj = {};
  for (let i = 0; i < players.length; i++) {
    players[i][0] in obj ? (obj[players[i][0]] += 1) : (obj[players[i][0]] = 1);
  }

  if (Math.max(...Object.values(obj)) < 5) return "forfeit";

  return [...Object.keys(obj)]
    .filter((letter) => obj[letter] > 4)
    .sort()
    .join("");
}

console.log(
  strangeCoach(["michael", "jordan", "lebron", "james", "kobe", "bryant"]),
  "forfeit"
);

console.log(
  strangeCoach([
    "babic",
    "keksic",
    "boric",
    "bukic",
    "sarmic",
    "balic",
    "kruzic",
    "hrenovkic",
    "beslic",
    "boksic",
    "krafnic",
    "pecivic",
    "klavirkovic",
    "kukumaric",
    "sunkic",
    "kolacic",
    "kovacic",
    "prijestolonasljednikovic",
  ]),
  "bk"
);

// console.log(
//   strangeCoach([
//     "jgztazpytubijfsmjz",
//     "bokvgratzzdibku",
//     "qineboilzoqdqivc",
//     "bfctyltibtkbxq",
//     "vioxcuhqhikxeqwekqkjo",
//     "nrvsdhttr",
//     "eiaoajuwxpwmyliqikzcchid",
//     "bxrwawgor",
//     "gbsqaxotzmblxttj",
//     "kwchrcaconuwaivhvnyf",
//     "neiemapiica",
//     "bppao",
//     "bxujiwivsjfbqrzygpdgkyz",
//     "jnzrhhmcgcpffflpzwmqib",
//     "jhozlevckrrwimdmyzc",
//     "bomojotkqqditelsk",
//     "ywmbheywzfyqjjs",
//     "snwrclyjkbspysjftcmyak",
//     "eelrsgkuhu",
//     "dnyzsvqjjuqoc",
//   ]),
//   "b"
// );
