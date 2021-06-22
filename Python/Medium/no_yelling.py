# https://edabit.com/challenge/hAsdEPWwufWoJos32

def no_yelling(phrase):
    s=phrase.split()
    a=s[-1][-1]
    s[-1]=s[-1].rstrip("?!.")+a
    return " ".join(s)

print(no_yelling("What went wrong?????????"), "What went wrong?")
print(no_yelling("Oh my goodness!!!"), "Oh my goodness!")
print(no_yelling("WHAT!"), "WHAT!")
print(no_yelling("WHAT?"), "WHAT?")
print(no_yelling("Oh my goodness!"), "Oh my goodness!")
print(no_yelling("I just cannot believe it."), "I just cannot believe it.")
print(no_yelling("I just!!! can!!! not!!! believe!!! it!!!"), "I just!!! can!!! not!!! believe!!! it!")
print(no_yelling("That's a ton!! of cheese!!!!"), "That's a ton!! of cheese!")
