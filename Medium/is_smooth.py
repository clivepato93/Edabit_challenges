# https://edabit.com/challenge/veFgC7QFEBmG6xE3G
def is_smooth(sentence):
    sentence=sentence.split()
    letters =[(sentence[number-1][-1].lower()==sentence[number][0].lower()) for number in range(1,len(sentence))]
    return all(letters)

print(is_smooth("Marta appreciated deep perpendicular right trapezoids"), True)
print(is_smooth("Someone is outside the doorway"), False)
print(is_smooth("She eats super righteously"), True)
print(is_smooth("Ben naps so often"), True)
print(is_smooth("Cute triangles are cute"), False)
print(is_smooth("Mad dislikes sharp pointy yoyos"), True)
print(is_smooth("Rita asks Sam mean numbered dilemmas"), True)
print(is_smooth("Marigold daffodils streaming happily."), False)
print(is_smooth("Simply wonderful laughing."), False)
