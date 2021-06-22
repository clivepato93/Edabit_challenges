# https://edabit.com/challenge/9p5tMqyYENTmD9Nh5
import string
def is_valid_hex_code(txt):
    stringy=string.ascii_uppercase[:6]+string.ascii_lowercase[:6]
    return txt[0]=="#" and all(i in stringy or i.isdigit() for i in txt[1:]) and len(txt)==7

print(is_valid_hex_code('#CD5C5Z'), False, 'Alphabetic characters not in A-F.')

print(is_valid_hex_code('#CD5C5C'), True)
print(is_valid_hex_code('#EAECEE'), True)
print(is_valid_hex_code('#eaecee'), True)
