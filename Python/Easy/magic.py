# https://edabit.com/challenge/GoGbZtXDYPDCfeBz8
def magic(txt):
    dates = txt.split()
    return txt.endswith(dates[0]+dates[1]) or txt.endswith(str(int(dates[0])*int(dates[1])))


print(magic('1 1 2011'),True,'magic date')
print(magic('4 1 2001'),False,'is not a magic date')
print(magic('2 4 2008'),True, 'magic date')
print(magic('3 3 2009'),True, 'magic date')
print(magic('5 2 2010'),True, 'magic date')
print(magic('1 2 2011'),False, 'is not a magic date')
print(magic('9 2 2011'),False, 'is not a magic date')
print(magic('1 4 2011'),False, 'is not a magic date')
