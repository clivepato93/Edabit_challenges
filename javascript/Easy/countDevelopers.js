// codewars.com/kata/582746fa14b3892727000c4f/train/javascript


function countDevelopers(list) {
    let x = 0
    list.forEach(e => {
       if( e.continent == 'Europe' && e.language == 'Javascript'){
           x++;
       }
    });
    return x
  }


  const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];

  console.log(countDevelopers(list1), 1, "Noah is the only JavaScript developer from Europe");
