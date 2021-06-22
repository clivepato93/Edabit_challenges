# https://edabit.com/challenge/cecCndEfA7sREySmL
def challenge1(s):
	return s[:5]

def challenge2(s):
	return s[-5:]

def challenge3(s):
	return s[::-1]

def challenge4(s):
	return s[5::-1]

def challenge5(s):
    return s[-7::2]
txt = 'abcdefghijklmnopqrstuvwxyz'
print(challenge1(txt), 'abcde')
print(challenge2(txt), 'vwxyz')
print(challenge3(txt), 'zyxwvutsrqponmlkjihgfedcba')
print(challenge4(txt), 'fedcba')
print(challenge5(txt), 'tvxz')
