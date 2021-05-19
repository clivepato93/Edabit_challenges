# https://edabit.com/challenge/TCbrjfMm2dPzQDbz5
def insert_whitespace(txt):
    f=""
    for letter in txt:
        if letter.isupper():
            f+=" "+letter
        else:
            f+=letter
    return f[1:]

print(insert_whitespace("SheWalksToTheBeach"), "She Walks To The Beach")
print(insert_whitespace("MarvinTalksTooMuch"), "Marvin Talks Too Much")
print(insert_whitespace("HopelesslyDevotedToYou"), "Hopelessly Devoted To You")
print(insert_whitespace("EvenTheBestFallDownSometimes"), "Even The Best Fall Down Sometimes")
print(insert_whitespace("TheGreatestUpsetInHistory"), "The Greatest Upset In History")
