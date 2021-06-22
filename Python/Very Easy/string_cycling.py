# https://edabit.com/challenge/HhmkKonCLTyAhAcwK
'''Given two strings, repeatedly cycle through all of the letters in the first
string until it is the same length as the second string.'''

def string_cycling(a, b):
    index =0
    while len(a)<len(b):
        a+=a[index]
        index+=1
    else:
        a=a[:len(b)]
    return a
#

# another solution not mine looked online
def string_cycling(a, b):
	return (a * len(b))[:len(b)]
print(string_cycling('abc', 'hello'), 'abcab')
print(string_cycling('programming', 'edabit'), 'progra')
