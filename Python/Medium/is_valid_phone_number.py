# https://edabit.com/challenge/B2jcSh2RG4GpQYuBz
def is_valid_phone_number(txt):
    return txt[0]=="("and " "==txt[5] and txt[6:9].isdigit() and txt[9]=="-" and txt[10:].isdigit()

print(is_valid_phone_number("(123) 456-7890"), True)
print(is_valid_phone_number("(1111)555 2345"), False)
# print(is_valid_phone_number("(098) 123 4567"), False)
# print(is_valid_phone_number("(123)456-7890"), False)
# print(is_valid_phone_number("abc(123)456-7890"), False)
# print(is_valid_phone_number("(123)456-7890abc"), False)
# print(is_valid_phone_number("abc(123)456-7890abc"), False)
# print(is_valid_phone_number("abc(123) 456-7890"), False)
# print(is_valid_phone_number("(123) 456-7890abc"), False)
# print(is_valid_phone_number("abc(123) 456-7890abc"), False)
# print(is_valid_phone_number("(123)-456-7890"), False)
# print(is_valid_phone_number("(123)_456-7890"), False)
# print(is_valid_phone_number("-123) 456-7890"), False)
# print(is_valid_phone_number("(519) 505-6498"), True)
