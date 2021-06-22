# https://edabit.com/challenge/Abo5qakEcntamMZ8p
def gimme_the_letters(s):
    return "".join([chr(n) for n in range(ord(s[0]),ord(s[-1])+1)])


print(gimme_the_letters("a-z"), "abcdefghijklmnopqrstuvwxyz")
print(gimme_the_letters("h-o"), "hijklmno")
print(gimme_the_letters("Q-Z"), "QRSTUVWXYZ")
print(gimme_the_letters("J-J"), "J")
print(gimme_the_letters("a-b"), "ab")
print(gimme_the_letters("A-A"), "A")
print(gimme_the_letters("g-i"), "ghi")
print(gimme_the_letters("H-I"), "HI")
print(gimme_the_letters("y-z"), "yz")
print(gimme_the_letters("e-k"), "efghijk")
print(gimme_the_letters("a-q"), "abcdefghijklmnopq")
print(gimme_the_letters("F-O"), "FGHIJKLMNO")
