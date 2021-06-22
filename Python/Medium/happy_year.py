# https://edabit.com/challenge/5FoNY2Z7B5wSCDTA4
def happy_year(year):
    year+=1
    while True:
        if len(set(str(year)))==4:
            return year
        year+=1


print(happy_year(1990), 2013)
print(happy_year(2017), 2018)
print(happy_year(2021), 2031)
