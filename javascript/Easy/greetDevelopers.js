// https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript
/*
function greetDevelopers(list) {
    // thank you for checking out my kata :)

    return list.map(person=> Object.assign(person,{greeting:`Hi ${person.firstName}, what do you like the most about ${person.language}?`}) )
  }

  var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];
  
  var answer = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
      greeting: 'Hi Sofia, what do you like the most about Java?'
    },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
      greeting: 'Hi Lukas, what do you like the most about Python?'
    },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
      greeting: 'Hi Madison, what do you like the most about Ruby?'
    } 
  ];
  
  console.log(greetDevelopers(list1), answer);
  
*/

// https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript

/*
function findAdmin(list, lang) {
    // thank you for checking out the Coding Meetup kata :)
    return list.filter(entry => entry.language == lang && entry.githubAdmin == 'yes')
  }


  var list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
  ];
  
  var answer1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
  ];
  
console.log(findAdmin(list1, 'JavaScript'), answer1);
console.log(findAdmin(list1, 'Ruby'), []);
console.log(findAdmin(list1, 'Python'), []);
*/

// https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript

/*
function isSameLanguage(list) {
    // thank you for checking out the Coding Meetup kata :)
    return list.every(entry => entry.language == list[0].language)
  }

  var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
  ];
  
  var list2 = [
    { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
    { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
    { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
  ];
  
  console.log(isSameLanguage(list1), true);
  console.log(isSameLanguage(list2), false);
*/

// https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript

/*
function countDevelopers(list) {
    let x = 0
    list.forEach(e => {
       if( e.continent == 'Europe' && e.language == 'JavaScript'){
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
  
  const list2 = [
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
    { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
  ];
  
  console.log(countDevelopers(list2), 0, "Lukas is not a JS devolper");
*/

// https://www.codewars.com/kata/583a8bde28019d615a000035/train/javascript

/*
function findOddNames(list) {
    // thank you for checking out the Coding Meetup kata :)
    return list.filter(entry=>{
        const name = [...entry.firstName].reduce((t,c)=>t+ c.charCodeAt(0),0)
        if(name%2==1){
            return entry
        }
    })
  }

  var list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  ];
  
  var answer1 = [
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  ];
  
console.log(findOddNames(list1), answer1);
  
  
  var list2 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  ];
  
  var answer2 = [];
  
console.log(findOddNames(list2), answer2);
*/