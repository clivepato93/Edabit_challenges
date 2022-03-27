const md5 = require('md5')

function passHash(str) {
    return md5(str)
}

var tests = [
    ['password', '5f4dcc3b5aa765d61d8327deb882cf99'],
    ['abc123', 'e99a18c428cb38d5f260853678922e03']
  ]
  
  for (var i = 0; i < tests.length; i++) {
    console.log(passHash(tests[i][0]), tests[i][1])
  };
  