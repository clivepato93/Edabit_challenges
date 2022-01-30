// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript


function expandedForm(num) {
    // Your code here
    const l = (''+num).length;
    const  numbers  = [...''+num].map((c,i)=> c+'0'.repeat(l-(i+1))).filter(el=>el[0]!='0');
    return numbers.join(' + ')
  }

  function expandedForm(num) {
    // Your code here
    const l = (''+num).length;
    const form =  [...''+num].reduce((t,c,i)=>{
        if(c!='0') return i==l-1?t+c+'0'.repeat(l-(i+1)):t+c+'0'.repeat(l-(i+1))+' + ';
        else return t
    },'')
    return form.endsWith(' + ')? form.slice(0,form.length-2):form
  }


console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');