# https://edabit.com/challenge/fA99WMH2xBndowm5a
# import re
#
# pattern = '\w+'
#
# txt = '**^&$Regular#$%Expressions$%$$%^**'
#
# print('\w' in pattern, True, 'You must use word character class.')
# print(' '.join(re.findall(pattern, txt)), 'Regular Expressions')
#
#
# import re
#
# x = '^\d{5}$'
#
# def validate(s):
# 	return bool(re.match(x, s))
#
#
#
# print(validate("81442"), True, "92345 is a valid zip.")
# print(validate("81442"), True, "81442 is a valid zip.")
# print(validate("33789"), True, "33789 is a valid zip.")
# print(validate("42531"), True, "42531 is a valid zip.")
# print(validate("9a345"), False, "9a345 contains a letter.")
# print(validate("%2345"), False, "%2345 contains a special character.")
# print(validate("933345"), False, "933345 is too long.")
# print(validate("2345"), False, "2345 is too short.")
# print(validate(" 93345"), False, "No leading whitespaces.")
# print(validate("23455 "), False, "No trailing whitespaces.")
# print(validate("23 455"), False, "No middle whitespaces.")


# https://edabit.com/challenge/p8tqXx7eiRk78g8zS
# import re
#
# pattern = "^[-+]*\d{0,}\\.{1}\d{1,}$"
#
# print(bool(re.match(pattern, "-12.12")), True)
# print(bool(re.match(pattern, "-.12")), True)
# print(bool(re.match(pattern, "0.12")), True)
# print(bool(re.match(pattern, ".122332")), True)
# print(bool(re.match(pattern, "+4.4")), True)
# print(bool(re.match(pattern, "+.7")), True)
# print(bool(re.match(pattern, "av0.12")), False)
# print(bool(re.match(pattern, "0.12av")), False)
# print(bool(re.match(pattern, "-.")), False)
# print(bool(re.match(pattern, "+")), False)
# print(bool(re.match(pattern, "12")), False)
# print(bool(re.match(pattern, "+4")), False)

# https://edabit.com/challenge/ffeLkHfoGDbApgNSA

import re

pattern = "x[A-F|0-9]{2}"


txt1 = 'Exception 0xAF'
txt2 = 'Exception 0x1A'
txt3 = 'Exception 0x22'
txt4 = 'Exception 0xF9'
txt5 = 'Exception 0x9H'
txt6 = 'Exception 0xf9'
txt7 = 'Exception 0xB'
txt8 = 'Exception 0xBA6C3'

print('[' in pattern and ']' in pattern, True, 'You must use a character set your expression.')

print(re.findall(pattern, txt1), ['xAF'])
print(re.findall(pattern, txt2), ['x1A'])
print(re.findall(pattern, txt3), ['x22'])
print(re.findall(pattern, txt4), ['xF9'])
print(re.findall(pattern, txt5), [], 'Letters should be between A and F')
print(re.findall(pattern, txt6), [], 'Letters must be upper case')
print(re.findall(pattern, txt7), [], 'There should be at least two hexadecimal digits')
print(re.findall(pattern, txt8), ['xBA'], 'There should be no more than two hexadecimal digits')


# Note from the original:
