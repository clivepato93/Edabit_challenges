# https://edabit.com/challenge/nb836onw9bek4FPDt

def count_same_ends(txt):
    s=txt.split()
    s=[w[:-1].lower() if not w[-1].isalpha() else w.lower() for w in s]
    # return s
    return sum(1 for w in s if len(w)>=2 and w[0]==w[-1])



print(count_same_ends('Pop! the balloon!'), 1)
print(count_same_ends('My mom is not a nun.'), 2)
print(count_same_ends('A fine morning'), 0)
print(count_same_ends('And the crowd goes wild!'), 0)
print(count_same_ends('No I am not in a gang.'), 1)
print(count_same_ends('Taste the difference'), 0)
