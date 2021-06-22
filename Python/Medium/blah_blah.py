# https://edabit.com/challenge/DnDLacMAgrxrq8mc3
def blah_blah(txt, n):
    txt=txt.split()
    if n>len(txt):
        return "".join("blah "*len(txt))[:-1]+"..."
    return " ".join(txt[:-n])+" "+"".join("blah "*n)[:-1]+"..."


print(blah_blah("A function is a block of code which only runs when it is called",  5), "A function is a block of code which only blah blah blah blah blah...")
print(blah_blah("one two three four five", 2), "one two three blah blah...")
print(blah_blah("Sphinx of black quartz judge my vow", 10), "blah blah blah blah blah blah blah...")
print(blah_blah("The quadratic formula is negative b plus or minus the square root of b squared subtract four ac all over two a", 5), "The quadratic formula is negative b plus or minus the square root of b squared subtract four blah blah bprint")
