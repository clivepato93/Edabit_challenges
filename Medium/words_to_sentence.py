# https://edabit.com/challenge/GP6CEr9a5CMqPHY7C

def words_to_sentence(words):
    s=""
    if not words or not words[0]:
        return ""
    if len(words)==1:
        return words[0]
    elif "" in words:
        words.remove("")
    if len(words)==2:
        return words[0]+" and "+words[1]
    return ", ".join(words[:-1])+" and "+words[-1]

print(words_to_sentence(["one", "two", "three", "four"]), "one, two, three and four")
print(words_to_sentence(["one", "two", "", "four"]), "one, two and four")
print(words_to_sentence(["one"]), "one")
print(words_to_sentence(["one", "", "three"]), "one and three")
print(words_to_sentence(["one", "two", ""]), "one and two")
print(words_to_sentence([""]), "", "A list containing an empty string should return an empty string.")
print(words_to_sentence([]), "", "An empty list should return an empty string.")
print(words_to_sentence(None), "", "None should return an empty string.")
