# https://edabit.com/challenge/jWk79SoDXnfm8ymhw
def censor(s):
    return " ".join(word if len(word)<5 else "*"*len(word) for word in s.split())

def censor(s):
    s=s.split()
    string=""
    for word in s:
        if len(word)<5:
            string+=word+" "
        else:
            string+="*"*len(word)
    return string

print(censor("The code is fourty"), "The code is ******")
print(censor("Two plus three is five"), "Two plus ***** is five")
print(censor("aaaa aaaaa 1234 12345"), "aaaa ***** 1234 *****")
print(censor("abcdefghijklmnop"), "****************")
print(censor("a"), "a")
