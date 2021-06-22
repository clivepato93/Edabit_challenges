# https://edabit.com/challenge/gt9LLufDCMHKMioh2

def stutter(word):
    if len(word)>1:
        return "{}... {}... {}?".format(word[:2],word[:2],word)

actual_param, expected_param = [
	"increasing", "adventures", "enticing", "unacceptable", "accountable", "incredible", "exquisite",
	"am", "enduring", "outstanding", "astonishing", "astounding", "impressive", "revolutionize",
	"recurring", "recollection", "so", "gorgeous", "captivating"
], [
	"in... in... increasing?", "ad... ad... adventures?", "en... en... enticing?", "un... un... unacceptable?",
    "ac... ac... accountable?", "in... in... incredible?", "ex... ex... exquisite?", "am... am... am?",
    "en... en... enduring?", "ou... ou... outstanding?", "as... as... astonishing?", "as... as... astounding?",
    "im... im... impressive?", "re... re... revolutionize?", "re... re... recurring?", "re... re... recollection?",
    "so... so... so?", "go... go... gorgeous?", "ca... ca... captivating?",
]
for i, w in enumerate(actual_param):
	print(stutter(w), expected_param[i])
