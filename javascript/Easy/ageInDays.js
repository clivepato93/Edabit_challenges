// https://www.codewars.com/kata/5803753aab6c2099e600000e/solutions/javascript


function ageInDays(year, month, day){
    //Your Magnificent Code here
    // Note that month == 1 means January (in contrast to JavaScripts Date where the month is zero based)
    const d = new Date();
    const [currentDay,currentMonth,currentYear] = 
    [d.getDate()-day,(d.getMonth()-month+1)*30,(d.getFullYear()-year)*365]
    const age = currentDay+currentMonth+currentYear
    return `You are ${age} days old`;
  
  }

  var birthday = new Date();
  birthday.setDate(birthday.getDate() - 2);
  console.log(ageInDays(birthday.getFullYear(), birthday.getMonth()+1, birthday.getDate()), "You are 2 days old", "Should return 'You are 2 days old' if your birthday is 2 days in the past");



  var birthday = new Date();
  birthday.setDate(birthday.getDate() - 365);
  console.log(ageInDays(birthday.getFullYear(), birthday.getMonth()+1, birthday.getDate()),
   "You are 365 days old",
    "Should return 'You are 365 days old' if your birthday is 365 days in the past");
