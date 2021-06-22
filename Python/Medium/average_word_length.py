# https://edabit.com/challenge/HpJCBwggQMDLWTHsM
def average_word_length(txt):
    c=""
    for i in txt:
        if i not in ".?!,":
            c+=i
    c=[len(n) for n in c.split()]
    return round(sum(c)/float(len(c)),2)



print(average_word_length('A B C.'), 1.00)
print(average_word_length('What a gorgeous day.'), 4.00)
print(average_word_length('Dude, this is so awesome!'), 3.80)
print(average_word_length('Working on my tan right now.'), 3.67)
print(average_word_length('Having a blast partying in Las Vegas.'), 4.29)
print(average_word_length('Have you ever wondered what Saturn looks like?'), 4.75)
print(average_word_length('I just planted a young oak tree, wonder how tall it will grow in a few years?'), 3.47)
