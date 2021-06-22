# https://edabit.com/challenge/f6X7pa38iQyoytJgr
def increasing_word_weights(sentence):
    w= [sum(ord(l) for l in w if l.isalpha()) for w in sentence.split()][::-1]
    return all(w[i]>w[i+1] for i in range(0,len(w)-1))


print(increasing_word_weights("Why not try?"), True)
print(increasing_word_weights("Face your fears, never settle."), True)
print(increasing_word_weights("DON'T SHOUT!"), True)
print(increasing_word_weights("Louise's grannie escapes hassled village gardens."), False)
