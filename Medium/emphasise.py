# https://edabit.com/challenge/K5277r6RmsJRSz27t
def emphasise(txt):
    sentence=txt.split()
    for number in range(0,len(sentence)):
        sentence[number]=sentence[number][0].upper()+sentence[number][1:].lower()
    return " ".join(sentence)



print(emphasise("hello world"), "Hello World")
print(emphasise("GOOD MORNING"), "Good Morning")
print(emphasise("99 red balloons!"), "99 Red Balloons!")
print(emphasise("1 2 3 4 5 6 7 8 9"), "1 2 3 4 5 6 7 8 9")
print(emphasise(""), "")
print(emphasise("joshua senoron"), "Joshua Senoron")
