// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript

function vertMirror(strng) {
    // Your code
    return strng.split('\n').map(el=> [...el].reverse().join('')).join('\n')
}
function horMirror(strng) {
    // Your code
    return strng.split('\n').reverse().join('\n')
}
function oper(fct, s) {
    // Your code
    return fct(s)
}

console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"), "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw");
// console.log(oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"), "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP");