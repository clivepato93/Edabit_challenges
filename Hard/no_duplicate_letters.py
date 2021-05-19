# https://edabit.com/challenge/WS6hR6b9EZzuDTD26
def no_duplicate_letters(phrase):
    phrase=phrase.lower().split()
    return all(len(set(w))==len(w) for w in phrase)

print(no_duplicate_letters("Easy does it."), True)
print(no_duplicate_letters("So far, so good."), False)
print(no_duplicate_letters("Better late than never."), False)
print(no_duplicate_letters("Beat around the bush."), True)
print(no_duplicate_letters("Give them the benefit of the doubt."), False)
print(no_duplicate_letters("Your guess is as good as mine."), False)
print(no_duplicate_letters("Make a long story short."), True)
