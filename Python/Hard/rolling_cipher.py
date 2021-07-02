# https://edabit.com/challenge/Egh2HES8eqPTTX9Q2
import string
def rolling_cipher(txt, n):
    stri=string.ascii_lowercase
    return ''.join([stri[(stri.index(i)+n)%26] for i in txt])
print(rolling_cipher('abcd', 1), 'bcde')
print(rolling_cipher('abcd', -1), 'zabc')
print(rolling_cipher('abcd', 3), 'defg')
print(rolling_cipher('abcd', 25), 'zabc')
print(rolling_cipher('abcd', 26), 'abcd')
print(rolling_cipher('abcd', 27), 'bcde')
print(rolling_cipher('abcd', 0), 'abcd')
