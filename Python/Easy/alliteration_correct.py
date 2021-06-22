# https://edabit.com/challenge/GTNuLE2uDoS7sLuGQ
def alliteration_correct(sentence):
    sentence=[word for word in sentence.lower().split() if len(word)>3]
    # return sentence
    return all(sentence[n][0]==sentence[n+1][0] for n in range(0,len(sentence)-1))


print(alliteration_correct('She swam to the shore.'), True)
print(alliteration_correct('Maybel manages money well.'), False)
print(alliteration_correct('He helps harness happiness.'), True)
print(alliteration_correct('There are many animals in the zoo.'), False)
print(alliteration_correct('Tanya took the tomatoes. Two times two is not twenty.'), True)
print(alliteration_correct('Two times two is four.'), False)
print(alliteration_correct('Nancy nimbly ran for the newts.'), True)
