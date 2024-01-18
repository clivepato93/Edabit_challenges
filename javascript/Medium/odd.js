function odd(str, arr = []) {
  const w = "odd";
  //   let i = 0;
  let word = "";
  let i = 0;
  const pos = [];
  if (str.indexOf("o") == -1) return 0;
  for (let j = 0; j < str.length; j++) {
    if (word.length == 3) break;
    if (str[j] == w[i]) {
      pos.push(j);
      i++;
      word += str[j];
    }
  }
  debugger;
  if (word == w) {
    function removeLetterAtIndex(inputString, index) {
      const regex = new RegExp(`^(.{${index}})(.)(.*)$`);

      const result = inputString.replace(
        regex,
        (match, prefix, letter, suffix) => {
          // Replace the matched portion with an empty string
          return prefix + "_" + suffix;
        }
      );

      return result;
    }
    for (let x = 0; x < pos.length; x++) {
      //   const reg = new RegExp(`^(.{${pos[x]}})(.)(.*)$`);
      str = removeLetterAtIndex(str, pos[x]);
    }
    return 1 + odd(str);
  }

  return 0;
}

function odd(str, arr = []) {
  const w = "odd";
  //   let i = 0;
  let word = "";
  let i = 0;
  const pos = [];
  if (str.indexOf("o") == -1) return 0;
  for (let j = 0; j < str.length; j++) {
    if (word.length == 3) break;
    if (str[j] == w[i]) {
      pos.push(j);
      i++;
      word += str[j];
    }
  }
  debugger;
  if (word == w) {
    function removeLetterAtIndex(inputString, index) {
      const regex = new RegExp(`^(.{${index}})(.)(.*)$`);

      const result = inputString.replace(
        regex,
        (match, prefix, letter, suffix) => {
          // Replace the matched portion with an empty string
          return prefix + suffix;
        }
      );

      return result;
    }
    str = removeLetterAtIndex(str, pos[0]);
    str = removeLetterAtIndex(str, pos[1] - 1);
    str = removeLetterAtIndex(str, pos[2] - 2);
    return 1 + odd(str);
  }

  return 0;
}
function odd(str) {
  var o = 0,
    d = 0,
    r = 0;
  for (var c of str) {
    debugger;
    if (c == "o") o++;
    if (o && c == "d") d++;
    if (o && d > 1) r++, (d -= 2), o--;
  }
  return r;
}

// console.log(odd("oudddbo"), 1);
// console.log(odd("ouddddbo"), 1);
// console.log(odd("ooudddbd"), 2);
console.log(odd("qoddoldfoodgodnooofostorodrnvdmddddeidfoi"), 6);
// console.log(
//   odd(
//     "dddodzyfddddcdrdddodtovdooonddddoddodddjdddddddorwdduddooddxddddoddoooddodoqpopoodddododrodddgodkoqoomdxoddaomdododfoodoznddouoddoddddfdtooddaondddoodmadooddodddduodfodyddqvpuordbddddbxddddadodddafcddoddvddrddwdddogbjtddobdddoodooodsovjdddoedddudododddddodpdbdotoaoddcododdoookdddddsdrjtooddododdkdovhdodddofdddddadoooddcdomdoydoodddxdogovdoodddddoosddjddddddwodsdndwgoooddodcodsitdozdoddodddldudoomoxddddddaxrddoocdoopddoddodcodpdddlupddwkddtbddzdooodofddddaddgddoododopodyooddooddoojddoddktpoodsdddxqddmddoooddddddddodooeodddomooodoodywdozoddduoldooofooobddoodooddoomoddodddgpeddodfmddddowzoydoddnodooldaocddfddfdoordodoodddddgdefordpjdddoddodtoikduotodldojdodddogoododddddjdyudoddodxdtdqddgddgdcbddvdtdddoodoodddedoddeodddoddddddkoodddtredodqoooddjdddddgfoedonylocnddhrddoddoddoowrbddpodqddodooodkpddodzddpoidqdoddoozbodoowddodddddddozdoqodfoemdudododooddedwodocoloddojdydoddosddkrodddooddndddhddcowoooddoodddodidooxgdodddoddeododdoodododddtddbddoduooddddoododdooddodwdoancdatldoddddjdxdoopcodddoooddddddddddodcdsodddaddddddddoddddjddodboddddioddqdqdnodddyddovdoddddopddodnojpdooxdoboddddoddiodoodoodiodooqododooddobddiddddoddosoadodogddodoihodddxdygrdddddoddodddddojdogddjduodoxfdododdodzdnodddddgoddddedoddsyxdodonddddoogodoodynoddduododuoddooddodoooyoovrdcddvvdddhgdoddeordddodrddddojodobddsddddodwdwddododdddodyddddengdcdicdozyddddddodmeooddomodoodddddoooinrddoddvdobnddddoidowddomooohdddolodoowdooooododddoddddrodddddooddbdhudldodiddddodddddddkoddootdydootdoodooodzddidxoddoddoydodxdozodarwdidonddvtooovdooddgdsiddoqoddodojddbdoooonoddnxpyddddodiomoddodiodoododdoqzokrdchoddgdopododddooddddgdddjdddosddodddodddadvjdoraoddpidddoddiaoddedogdoepdedpkodddsddddddxdghdodedddodooddvhdudqddjcmddlddooocddoonodoeduddddoddododddooddsdbdodddokddddoddddadodogddddooadddoodhdoodaogddfooooddodoqkddoroooddoddohddobdvddddodaoddddddddoddddoddodaddododddcddieddddldoodddddtdorddddotdddddddjoddddolcdozododdddodfwcodudhdduddcoddddddlkopedoddoddodhodddgdsddddopozddwodoogoddddooodpdoxddxoddqdovydwdooodxdddkdotdddoodddododdoohudodoodnoooovooodidodddoddddodddidddciomsddooakodgddodddodddooddgddddondbdqoddoooddgfockodeoddddoddrddddbedpooddddddoodddrudddddodddodooodtddddddhroooudyoddddodrodeoioqdddoedzdpdoddddgddoidajddoudddoodotododdozddosdodmdrddddodxmoddddxdboddodddodocdvoodddddddzhodoidoodgbhoddedodicoyolyowoddooadidookdddmdddojdodtddoodnddhoododdovmddtwropdtfdvdwddodddyldddodroodddbooocuudbdbdcooodlddzdgoddoooldfdddoodddoniocdddddoodgdoddoxozlxddddwddpddoododozbddtodbdoedvoozodddoooodrpdddhddoododdtoddddddoezoddoddooddoomoodzooddadwhdodododddoooddodddsjdbodoyqdfxddddddqddddddyjvddodddodddydoodddddodcdoddxvodddoddodddowddotdzdodcjeqdzqdddndocoddododwovddwdodddyododddovfddddddlddsooddddvm"
//   ),
//   664
// );
