# https://edabit.com/challenge/6DppMcokmzJ3TtNNB
def true_alphabetic(txt):
    n=sorted(i for i in txt if i!=" ")
    sentence=""
    for l in txt:
        if l !=" ":
            sentence+=n.pop(0)
        else:
            sentence+=" "
    return sentence

print(true_alphabetic("hello world"), "dehll loorw")
