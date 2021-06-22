# https://edabit.com/challenge/TZXG9RfcZ7T3o43QF
def same_length(txt):
    zero=[val for val in txt.split("1")]
    one=[val for val in txt.split("0")]
    return zero.count("")==one.count("")


print(same_length('10'), True)
print(same_length('1010'), True)
print(same_length('1100'), True)
print(same_length('10101110001100'), True)
print(same_length('1111000010101100'), True)

print(same_length('1001'), False)
print(same_length('101001'), False)
print(same_length('101'), False)
print(same_length('10010'), False)
print(same_length('110'), False)
print(same_length('11001'), False)
print(same_length('11100011000'), False)
