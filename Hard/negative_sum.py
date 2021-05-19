# https://edabit.com/challenge/q3zrcjja7uWHejxf6
def negative_sum(chars):
    finder=[int(chars[i:i+3]) for i in range(len(chars)) if chars.startswith("-",i)]
    return sum(finder)

print(negative_sum("-12 13%14&-11"), -23)
print(negative_sum("-12 13%14&-2 0 12 -4"), -18)
print(negative_sum("33%14&-1 12 a 21 -2 b c"), -3)
print(negative_sum("22 13%14&-11-22 13 12"), -33)
print(negative_sum("-12 -8"), -20)
