
# https://edabit.com/challenge/jwiJNMiCW6P5d2XXA
def does_rhyme(txt1, txt2):
    v="aeiou"
    a=txt1.lower()[:-1].split()
    b=txt2.lower()[:-1].split()
    return [i for i in a[-1] if i in v]==[i for i in b[-1] if i in v]


print(does_rhyme('Sam I am!', 'Green eggs and ham.'), True, 'Should work with punctuation.')
print(does_rhyme('Sam I am!', 'Green eggs and HAM.'), True, 'Should work with uppercase/punctuation.')
print(does_rhyme('head straight to town', 'give me not a frown'), True)
print(does_rhyme('with an unpleasant bump', 'in a slump'), True)
print(does_rhyme('your elbow and chin!', 'how much can you win?'), True, 'Should work with punctuation.')
print(does_rhyme('you will start to race', 'the waiting Place'), True, 'Should work with upper case letters.')
print(does_rhyme('All that waiting and staying.', 'where the band are playing.'), True, 'Should work with punctuation.')
print(does_rhyme('You are off to the races', 'a splendid day.'), False)
print(does_rhyme('and frequently do?', 'you gotta move.'), False)
print(does_rhyme('down by the bay', 'where the watermelons grow'), False)
print(does_rhyme('back to my home', 'i dare not go'), False)
