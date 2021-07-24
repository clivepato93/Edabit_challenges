# https://edabit.com/challenge/pnd7xPYuvogkNfHg6

def get_best_student(grades):
    return max(grades,key=lambda i:sum(grades[i])/len(grades))
print(get_best_student({
	"John": [100, 90, 80],
	"Bob": [100, 70, 80]
}), "John", "Example #1")

print(get_best_student({
	"Susan": [67, 84, 75, 63],
  "Mike": [87, 98, 64, 71],
  "Jim": [90, 58, 73, 86]
}), "Mike", "Example #2")