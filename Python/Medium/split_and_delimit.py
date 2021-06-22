# https://edabit.com/challenge/LgXMXThsKcYtdYHrb
def split_and_delimit(txt, num, delimiter):
    c=[]
    a=0
    for i in range(0,len(txt),num):
        c.append(txt[a:a+num])
        a+=num
    return '{}'.format(delimiter).join(c)

print(split_and_delimit("bellow", 2, '&'), "be&ll&ow")
print(split_and_delimit("magnify", 3, ':'), "mag:nif:y")
print(split_and_delimit("poisonous", 2, '~'), "po~is~on~ou~s")
print(split_and_delimit("shape-shifting", 5, '^'), "shape^-shif^ting")
print(split_and_delimit("nebulous", 1, '#'), "n#e#b#u#l#o#u#s")
