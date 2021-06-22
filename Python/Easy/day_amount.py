#https://edabit.com/challenge/XZQw3zto7keDWPa5v
def day_amount(month, year):
    days={"1":31,
          "2":28,
          "3":31,
          "4":30,
          "5":31,
          "6":30,
          "7":31,
          "8":31,
          "9":30,
          "10":31,
          "11":30,
          "12":31}
    leap=False
    if str(year)[2:].count("0")==2:
        if year%100==0 and year%400==0:
            leap=True
    else:
        if year%4==0:
            leap=True

    return days[str(month)]+1 if leap else days[str(month)]

print(day_amount(2, 2004), 29 ,
  'Should show the correct day amount for February on a leap year that is divisible by 4 but not 100')
print(day_amount(2, 1800), 28,
  'Should show the correct day amount for February on a leap year that is divisible by 100 but not 400 ')
print(day_amount(2, 1600), 29,
  'Should show the correct day amount for February on a leap year that is divisible by 100 and 400')
