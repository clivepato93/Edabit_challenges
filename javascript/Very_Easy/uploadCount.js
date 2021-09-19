// https://edabit.com/challenge/GoXcArzHKTWaA8C2z

// function uploadCount(dates, month) {
// 	return dates.filter((x)=> x.includes(month)).length
// }

// a better solution not mine
const uploadCount = (dates, month) =>
	dates.reduce((a, m) => a + (m.split(' ')[0] == month ? 1 : 0), 0);

console.log((uploadCount(['Dec 10', 'Dec 10', 'Dec 9', 'Dec 9', 'Dec 9', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 5', 'Dec 5', 'Dec 5', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 3', 'Dec 3', 'Dec 3', 'Dec 2', 'Dec 2', 'Dec 2', 'Dec 1', 'Dec 1', 'Dec 1', 'Dec 1','Nov 30', 'Nov 30', 'Nov 28', 'Nov 28', 'Nov 27', 'Nov 27', 'Nov 27', 'Nov 26', 'Nov 26', 'Nov 25', 'Nov 25', 'Nov 25', 'Nov 25', 'Nov 24', 'Nov 24', 'Nov 23', 'Nov 23', 'Nov 23', 'Nov 21', 'Nov 21', 'Nov 20', 'Nov 20', 'Nov 20', 'Nov 19', 'Nov 19', 'Nov 19', 'Nov 18', 'Nov 18', 'Nov 17', 'Nov 17', 'Nov 17', 'Nov 16', 'Nov 16', 'Nov 16', 'Nov 16', 'Nov 15', 'Nov 15', 'Nov 14', 'Nov 14', 'Nov 14', 'Nov 13', 'Nov 13', 'Nov 13', 'Nov 13', 'Nov 12', 'Nov 12', 'Nov 12', 'Nov 11', 'Nov 11', 'Nov 11', 'Nov 11', 'Nov 10', 'Nov 10', 'Nov 10', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 8', 'Nov 7', 'Nov 7', 'Nov 7', 'Nov 6', 'Nov 6', 'Nov 5', 'Nov 5', 'Nov 4', 'Nov 4', 'Nov 4', 'Nov 4', 'Nov 3', 'Nov 3', 'Nov 3', 'Nov 2', 'Nov 2', 'Nov 2', 'Nov 2', 'Nov 1', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 30', 'Oct 29', 'Oct 29', 'Oct 28', 'Oct 28', 'Oct 28', 'Oct 27', 'Oct 27', 'Oct 26', 'Oct 26', 'Oct 26', 'Oct 25', 'Oct 24', 'Oct 24', 'Oct 24', 'Oct 23', 'Oct 23', 'Oct 23', 'Oct 22', 'Oct 22', 'Oct 22', 'Oct 21', 'Oct 20', 'Oct 20', 'Oct 20', 'Oct 20', 'Oct 19', 'Oct 19', 'Oct 19', 'Oct 18', 'Oct 17', 'Oct 17', 'Oct 17', 'Oct 17', 'Oct 16', 'Oct 16', 'Oct 15', 'Oct 15', 'Oct 14', 'Oct 14', 'Oct 13', 'Oct 13', 'Oct 13', 'Oct 12', 'Oct 12', 'Oct 10', 'Oct 10', 'Oct 10', 'Oct 9', 'Oct 9', 'Oct 9', 'Oct 8', 'Oct 8', 'Oct 7', 'Oct 7', 'Oct 6', 'Oct 6','Oct 5', 'Oct 5', 'Oct 3', 'Oct 3', 'Oct 3', 'Oct 2', 'Oct 2', 'Oct 2', 'Oct 2', 'Oct 1', 'Oct 1', 'Sept 30', 'Sept 30', 'Sept 29', 'Sept 29', 'Sept 29', 'Sept 28', 'Sept 28', 'Sept 26', 'Sept 26', 'Sept 25', 'Sept 24', 'Sept 24', 'Sept 23', 'Sept 23', 'Sept 23', 'Sept 22', 'Sept 22', 'Sept 22', 'Sept 21', 'Sept 21', 'Sept 20', 'Sept 19', 'Sept 19', 'Sept 19', 'Sept 18', 'Sep 18'], "Nov"), 79))
console.log((uploadCount(['Dec 10', 'Dec 10', 'Dec 9', 'Dec 9', 'Dec 9', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 5', 'Dec 5', 'Dec 5', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 3', 'Dec 3', 'Dec 3', 'Dec 2', 'Dec 2', 'Dec 2', 'Dec 1', 'Dec 1', 'Dec 1', 'Dec 1','Nov 30', 'Nov 30', 'Nov 28', 'Nov 28', 'Nov 27', 'Nov 27', 'Nov 27', 'Nov 26', 'Nov 26', 'Nov 25', 'Nov 25', 'Nov 25', 'Nov 25', 'Nov 24', 'Nov 24', 'Nov 23', 'Nov 23', 'Nov 23', 'Nov 21', 'Nov 21', 'Nov 20', 'Nov 20', 'Nov 20', 'Nov 19', 'Nov 19', 'Nov 19', 'Nov 18', 'Nov 18', 'Nov 17', 'Nov 17', 'Nov 17', 'Nov 16', 'Nov 16', 'Nov 16', 'Nov 16', 'Nov 15', 'Nov 15', 'Nov 14', 'Nov 14', 'Nov 14', 'Nov 13', 'Nov 13', 'Nov 13', 'Nov 13', 'Nov 12', 'Nov 12', 'Nov 12', 'Nov 11', 'Nov 11', 'Nov 11', 'Nov 11', 'Nov 10', 'Nov 10', 'Nov 10', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 8', 'Nov 7', 'Nov 7', 'Nov 7', 'Nov 6', 'Nov 6', 'Nov 5', 'Nov 5', 'Nov 4', 'Nov 4', 'Nov 4', 'Nov 4', 'Nov 3', 'Nov 3', 'Nov 3', 'Nov 2', 'Nov 2', 'Nov 2', 'Nov 2', 'Nov 1', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 30', 'Oct 29', 'Oct 29', 'Oct 28', 'Oct 28', 'Oct 28', 'Oct 27', 'Oct 27', 'Oct 26', 'Oct 26', 'Oct 26', 'Oct 25', 'Oct 24', 'Oct 24', 'Oct 24', 'Oct 23', 'Oct 23', 'Oct 23', 'Oct 22', 'Oct 22', 'Oct 22', 'Oct 21', 'Oct 20', 'Oct 20', 'Oct 20', 'Oct 20', 'Oct 19', 'Oct 19', 'Oct 19', 'Oct 18', 'Oct 17', 'Oct 17', 'Oct 17', 'Oct 17', 'Oct 16', 'Oct 16', 'Oct 15', 'Oct 15', 'Oct 14', 'Oct 14', 'Oct 13', 'Oct 13', 'Oct 13', 'Oct 12', 'Oct 12', 'Oct 10', 'Oct 10', 'Oct 10', 'Oct 9', 'Oct 9', 'Oct 9', 'Oct 8', 'Oct 8', 'Oct 7', 'Oct 7', 'Oct 6', 'Oct 6','Oct 5', 'Oct 5', 'Oct 3', 'Oct 3', 'Oct 3', 'Oct 2', 'Oct 2', 'Oct 2', 'Oct 2', 'Oct 1', 'Oct 1', 'Sept 30', 'Sept 30', 'Sept 29', 'Sept 29', 'Sept 29', 'Sept 28', 'Sept 28', 'Sept 26', 'Sept 26', 'Sept 25', 'Sept 24', 'Sept 24', 'Sept 23', 'Sept 23', 'Sept 23', 'Sept 22', 'Sept 22', 'Sept 22', 'Sept 21', 'Sept 21', 'Sept 20', 'Sept 19', 'Sept 19', 'Sept 19', 'Sept 18', 'Sep 18'], "Dec"), 36))
console.log((uploadCount(['Dec 10', 'Dec 10', 'Dec 9', 'Dec 9', 'Dec 9', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 5', 'Dec 5', 'Dec 5', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 3', 'Dec 3', 'Dec 3', 'Dec 2', 'Dec 2', 'Dec 2', 'Dec 1', 'Dec 1', 'Dec 1', 'Dec 1','Nov 30', 'Nov 30', 'Nov 28', 'Nov 28', 'Nov 27', 'Nov 27', 'Nov 27', 'Nov 26', 'Nov 26', 'Nov 25', 'Nov 25', 'Nov 25', 'Nov 25', 'Nov 24', 'Nov 24', 'Nov 23', 'Nov 23', 'Nov 23', 'Nov 21', 'Nov 21', 'Nov 20', 'Nov 20', 'Nov 20', 'Nov 19', 'Nov 19', 'Nov 19', 'Nov 18', 'Nov 18', 'Nov 17', 'Nov 17', 'Nov 17', 'Nov 16', 'Nov 16', 'Nov 16', 'Nov 16', 'Nov 15', 'Nov 15', 'Nov 14', 'Nov 14', 'Nov 14', 'Nov 13', 'Nov 13', 'Nov 13', 'Nov 13', 'Nov 12', 'Nov 12', 'Nov 12', 'Nov 11', 'Nov 11', 'Nov 11', 'Nov 11', 'Nov 10', 'Nov 10', 'Nov 10', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 8', 'Nov 7', 'Nov 7', 'Nov 7', 'Nov 6', 'Nov 6', 'Nov 5', 'Nov 5', 'Nov 4', 'Nov 4', 'Nov 4', 'Nov 4', 'Nov 3', 'Nov 3', 'Nov 3', 'Nov 2', 'Nov 2', 'Nov 2', 'Nov 2', 'Nov 1', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 30', 'Oct 29', 'Oct 29', 'Oct 28', 'Oct 28', 'Oct 28', 'Oct 27', 'Oct 27', 'Oct 26', 'Oct 26', 'Oct 26', 'Oct 25', 'Oct 24', 'Oct 24', 'Oct 24', 'Oct 23', 'Oct 23', 'Oct 23', 'Oct 22', 'Oct 22', 'Oct 22', 'Oct 21', 'Oct 20', 'Oct 20', 'Oct 20', 'Oct 20', 'Oct 19', 'Oct 19', 'Oct 19', 'Oct 18', 'Oct 17', 'Oct 17', 'Oct 17', 'Oct 17', 'Oct 16', 'Oct 16', 'Oct 15', 'Oct 15', 'Oct 14', 'Oct 14', 'Oct 13', 'Oct 13', 'Oct 13', 'Oct 12', 'Oct 12', 'Oct 10', 'Oct 10', 'Oct 10', 'Oct 9', 'Oct 9', 'Oct 9', 'Oct 8', 'Oct 8', 'Oct 7', 'Oct 7', 'Oct 6', 'Oct 6','Oct 5', 'Oct 5', 'Oct 3', 'Oct 3', 'Oct 3', 'Oct 2', 'Oct 2', 'Oct 2', 'Oct 2', 'Oct 1', 'Oct 1', 'Sept 30', 'Sept 30', 'Sept 29', 'Sept 29', 'Sept 29', 'Sept 28', 'Sept 28', 'Sept 26', 'Sept 26', 'Sept 25', 'Sept 24', 'Sept 24', 'Sept 23', 'Sept 23', 'Sept 23', 'Sept 22', 'Sept 22', 'Sept 22', 'Sept 21', 'Sept 21', 'Sept 20', 'Sept 19', 'Sept 19', 'Sept 19', 'Sept 18'], "Sept"), 25))
console.log((uploadCount(['Dec 10', 'Dec 10', 'Dec 9', 'Dec 9', 'Dec 9', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 8', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 7', 'Dec 5', 'Dec 5', 'Dec 5', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 4', 'Dec 3', 'Dec 3', 'Dec 3', 'Dec 2', 'Dec 2', 'Dec 2', 'Dec 1', 'Dec 1', 'Dec 1', 'Dec 1','Nov 30', 'Nov 30', 'Nov 28', 'Nov 28', 'Nov 27', 'Nov 27', 'Nov 27', 'Nov 26', 'Nov 26', 'Nov 25', 'Nov 25', 'Nov 25', 'Nov 25', 'Nov 24', 'Nov 24', 'Nov 23', 'Nov 23', 'Nov 23', 'Nov 21', 'Nov 21', 'Nov 20', 'Nov 20', 'Nov 20', 'Nov 19', 'Nov 19', 'Nov 19', 'Nov 18', 'Nov 18', 'Nov 17', 'Nov 17', 'Nov 17', 'Nov 16', 'Nov 16', 'Nov 16', 'Nov 16', 'Nov 15', 'Nov 15', 'Nov 14', 'Nov 14', 'Nov 14', 'Nov 13', 'Nov 13', 'Nov 13', 'Nov 13', 'Nov 12', 'Nov 12', 'Nov 12', 'Nov 11', 'Nov 11', 'Nov 11', 'Nov 11', 'Nov 10', 'Nov 10', 'Nov 10', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 9', 'Nov 8', 'Nov 7', 'Nov 7', 'Nov 7', 'Nov 6', 'Nov 6', 'Nov 5', 'Nov 5', 'Nov 4', 'Nov 4', 'Nov 4', 'Nov 4', 'Nov 3', 'Nov 3', 'Nov 3', 'Nov 2', 'Nov 2', 'Nov 2', 'Nov 2', 'Nov 1', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 31', 'Oct 30', 'Oct 29', 'Oct 29', 'Oct 28', 'Oct 28', 'Oct 28', 'Oct 27', 'Oct 27', 'Oct 26', 'Oct 26', 'Oct 26', 'Oct 25', 'Oct 24', 'Oct 24', 'Oct 24', 'Oct 23', 'Oct 23', 'Oct 23', 'Oct 22', 'Oct 22', 'Oct 22', 'Oct 21', 'Oct 20', 'Oct 20', 'Oct 20', 'Oct 20', 'Oct 19', 'Oct 19', 'Oct 19', 'Oct 18', 'Oct 17', 'Oct 17', 'Oct 17', 'Oct 17', 'Oct 16', 'Oct 16', 'Oct 15', 'Oct 15', 'Oct 14', 'Oct 14', 'Oct 13', 'Oct 13', 'Oct 13', 'Oct 12', 'Oct 12', 'Oct 10', 'Oct 10', 'Oct 10', 'Oct 9', 'Oct 9', 'Oct 9', 'Oct 8', 'Oct 8', 'Oct 7', 'Oct 7', 'Oct 6', 'Oct 6','Oct 5', 'Oct 5', 'Oct 3', 'Oct 3', 'Oct 3', 'Oct 2', 'Oct 2', 'Oct 2', 'Oct 2', 'Oct 1', 'Oct 1', 'Sept 30', 'Sept 30', 'Sept 29', 'Sept 29', 'Sept 29', 'Sept 28', 'Sept 28', 'Sept 26', 'Sept 26', 'Sept 25', 'Sept 24', 'Sept 24', 'Sept 23', 'Sept 23', 'Sept 23', 'Sept 22', 'Sept 22', 'Sept 22', 'Sept 21', 'Sept 21', 'Sept 20', 'Sept 19', 'Sept 19', 'Sept 19', 'Sept 18', 'Sep 18'], "Oct"), 73))
