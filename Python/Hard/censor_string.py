# https://edabit.com/challenge/zJSF5EfPe69e9sJAc
def censor_string(txt, lst, char):
    txt=txt.split()
    return " ".join(char*len(word) if word in txt and word in lst else word for word in txt)




print(censor_string("The cow jumped over the moon.", ["cow", "over"], "*"), "The *** jumped **** the moon.")
print(censor_string("Why do my cats keep eating grass?", ["Why", "keep", "eating"], "!"), "!!! do my cats !!!! !!!!!! grass?")
print(censor_string("How do I stop myself from using python!?", ["do", "stop", "using"], "-"), "How -- I ---- myself from ----- python!?")
print(censor_string("If statements are pretty fun to use.", ["statements", "pretty", "to"], "~~"), "If ~~~~~~~~~~~~~~~~~~~~ are ~~~~~~~~~~~~ fun ~~~~ use.")
print(censor_string("I'm dyslexic, but that deos'tn matter!", ["that", "matter!"], "?"), "I'm dyslexic, but ???? deos'tn ???????")
print(censor_string("I should be doing work but I am doing this instead.", ["should", "but", "this"], "*"), "I ****** be doing work *** I am doing **** instead.")
