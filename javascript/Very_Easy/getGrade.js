// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/solutions/javascript/me/oldest

function getGrade (s1, s2, s3) {
    // Code here
    const result = (s1 + s2 + s3) / 3
    
    if(result >= 90) {
     return 'A';
    }
    if(result >= 80) {
     return 'B';
    }
    if(result >= 70) {
     return 'C';
    }
    if(result >= 60) {
     return 'D';
    }
    return 'F';
  }
  
  console.log(25/2)