
# https://edabit.com/challenge/b2xiGxPe2otyCtT2o

def how_many_times(msg):
    c= [chr(i) for i in range(ord('a'),ord('z')+1)]
    # print(c)
    return sum([c.index(i)+1 for i in msg])


print(how_many_times("abde"))


print(how_many_times("qudusayo"), 123)
print(how_many_times("que"), 43)
print(how_many_times("abd"), 7)
