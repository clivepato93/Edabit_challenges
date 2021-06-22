# https://edabit.com/challenge/GmCW4ziDMvxqnxnAj
def who_passed(students):
    return sorted([k for k,v in students.items() if all(eval(t)==1 for t in students[k])])

print(who_passed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/5", "50/50", "10/10", "10/10"],
  "Adam" : ["3/5", "46/50", "9/10", "10/10"],
  "Barry" : ["5/5", "50/50", "10/10", "10/10"]
}), ["Barry", "John"])

print(who_passed({
  "Zara" : ["10/10"],
  "Kris" : ["10/10"],
  "Charlie" : ["10/10"],
  "Alex" : ["10/10"]
}), ["Alex", "Charlie", "Kris", "Zara"])

print(who_passed({
  "Zach" : ["10/10", "2/4"],
  "Fred" : ["10/10", "3/4"]
}), [])
