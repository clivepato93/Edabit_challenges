# https://edabit.com/challenge/af6XnEimLZTcwxJTP

def rearrange(sentence):
    d=[]
    sentence=sentence.split()
    for word in sentence:
        for i,v in enumerate(word):
            if v.isdigit():
                c=word.index(v)
                # print(c,v)
                n=word[:i]+word[i+1:]
                w=(v,n)
                d.append(w)
    return ' '.join(b for a,b in sorted(d))

print(rearrange("is2 Thi1s T4est 3a"), "This is a Test")
print(rearrange("4of Fo1r pe6ople g3ood th5e the2"), "For the good of the people")
print(rearrange(" "), "")
