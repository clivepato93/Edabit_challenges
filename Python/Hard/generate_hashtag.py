# https://edabit.com/challenge/RvCEzuqacuBA94ZfP
def generate_hashtag(txt):
    txt="".join([i.capitalize() for i in txt.split() if i!=" "])
    if not(txt) or len(txt)>=140:
        return False
    return "#"+txt





print(generate_hashtag(""), False, "Expected an empty string to return False")
print(generate_hashtag(" " * 100), False, "Still an empty string")
print(generate_hashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
print(generate_hashtag("Edabit"), "#Edabit", "Should handle a single word.")
print(generate_hashtag("Edabit Is Great"), "#EdabitIsGreat", "Should remove spaces.")
print(generate_hashtag("Edabit is great"), "#EdabitIsGreat", "Should capitalize first letters of all words.")
print(generate_hashtag("eda" + " " * 140 + "bit"), "#EdaBit")
print(generate_hashtag("Smmmmmmmmmmmmmmmmmmmmmmmmmmmmaaaaaaaaaaaaaaaaaaaaaaaaaaaaalllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll Dog"), False, "Should return False if the final word is longer than 140 chars.")
print(generate_hashtag("e" * 121), "#E" + "e" * 120, "Should work")
print(generate_hashtag("e" * 140), False, "Too long")
print(generate_hashtag("    Hello     World   " ), "#HelloWorld")
