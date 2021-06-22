# https://edabit.com/challenge/aqA6KSHRCwfE44Q9m
def normalize(txt):
    text=txt.split()
    if all(word.isupper() for word in text):
        return "{} {}!".format(text[0].capitalize()," ".join(word.lower() for word in text[1:]))
    return txt




print(normalize("CAPS LOCK DAY IS OVER"), "Caps lock day is over!", )
print(normalize("Today is not caps lock day."), "Today is not caps lock day.")
print(normalize("WE WANT THIS COVID THING TO BE OVER"), "We want this covid thing to be over!")
print(normalize("Let us stay calm, no need to panic."), "Let us stay calm, no need to panic.")
print(normalize("DO NOT SHOUT"), "Do not shout!")
print(normalize("Civilized conversation."), "Civilized conversation.")
