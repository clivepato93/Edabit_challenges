# https://edabit.com/challenge/pjgDmRqh2fbBBwo77
'''
Syncopation means an emphasis on a weak beat of a bar of music;
most commonly, beats 2 and 4 (and all other even-numbered beats if applicable).

s is a line of music, represented as a string, where hashtags # represent emphasized beats.
Create a function that returns if the line of music contains any syncopation.


'''
def has_syncopation(s):
    return any(i=="#" for i in s[1::2])


print(has_syncopation(".#.#.#.#"), True)
print(has_syncopation("#.#...#."), False)
print(has_syncopation("#.#.###."), True)
