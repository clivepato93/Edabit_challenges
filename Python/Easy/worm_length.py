# https://edabit.com/challenge/6LwzPRc6LrauEgr7H
def worm_length(worm):
	return "invalid" if len(worm)==0 or len(worm)!= worm.count("-") else "{} mm.".format(worm.count("-")*10)

def worm_length(worm):
    length = 0
    if len(worm)==0 or len(worm)!= worm.count("-"):
        return "invalid"
    else:
        for stringy in worm:
            length+=1
        return "{} mm.".format(length*10)

print(worm_length("----------"), "100 mm.")
print(worm_length(""), "invalid")
print(worm_length("---_-___---_"), "invalid")
print(worm_length("------"), "60 mm.")
print(worm_length("iwheguawhpvpaiehpiuwwega"), "invalid")
print(worm_length("QWERTYUIOPASDFGHJKL"), "invalid")
print(worm_length("------------"), "120 mm.")
