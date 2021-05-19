# https://edabit.com/challenge/CHwX2o6rqrBsL4gzr

def check_title(txt):
	return txt == txt.title()


def check_title(x):
    return all(i[0].isupper() for i in x.split())

def check_title(txt):
  return all([i[0] == i[0].upper() for i in txt.split()])


print(check_title("A Mind Boggling Achievement"), True)
print(check_title("A Simple Java Script Program!"), True)
print(check_title("Water is transparent"), False)
print(check_title("Edabit Is Wonderful!"), True)
print(check_title("We Love to relax"), False)
print(check_title("I want To eat bread"), False)

# Author: Chidananda BS
