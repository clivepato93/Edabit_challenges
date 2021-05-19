# https://edabit.com/challenge/oiHH7qocTyM3JqNf8
def move(word):
    c = [ord(i)+1 for i in list(word)]
    return "".join(chr(i) for i in c)


print(move("hello"), "ifmmp")
print(move("lol"), "mpm")
print(move("bye"), "czf")
