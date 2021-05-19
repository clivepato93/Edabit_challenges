# https://edabit.com/challenge/DcXTvFs7Zvc3PDTzX
def validate_binary(b):
    return not(b.count("1")%2!=0)


print(validate_binary('00101101'), True)
print(validate_binary('11000000'), True)
print(validate_binary('11000001'), False)
print(validate_binary('10010010'), False)
