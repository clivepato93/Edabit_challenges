# https://edabit.com/challenge/Qqd2symFeFe4y5YGG
def palindromic_date(date):
    d,m,y=date.split("/")
    return d+m==y[::-1] and m+d==y[::-1]
print(palindromic_date("02/02/2020"), True)
print(palindromic_date("11/12/2019"), False)
print(palindromic_date("11/02/2011"), False)
print(palindromic_date("06/10/1469"), False)
print(palindromic_date("06/05/3133"), False)
print(palindromic_date("12/12/2121"), True)
print(palindromic_date("09/09/9090"), True)
print(palindromic_date("11/04/2203"), False)
print(palindromic_date("07/07/7070"), True)
print(palindromic_date("06/11/2923"), False)
print(palindromic_date("03/08/8030"), False)
print(palindromic_date("01/01/1010"), True)
print(palindromic_date("03/11/3369"), False)
print(palindromic_date("11/03/2775"), False)
print(palindromic_date("03/03/1822"), False)
