# https://edabit.com/challenge/wcdS7MEL5gvr5SGsh

alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

def alphabet_index(alphabet, string):
    def a(r):
        return r[0]
    n=sorted([(alphabet.index(v)+1,v) for i,v in enumerate(string.lower())],key=a)[-1]

    return ''.join(str(i) for i in n)



print(alphabet_index(alphabet, "Oscar"), "19s")
print(alphabet_index(alphabet, "Lucas"), "21u")
print(alphabet_index(alphabet, "Marko"), "18r")
print(alphabet_index(alphabet, "Esley"), "25y")
print(alphabet_index(alphabet, "Rogei"), "18r")
print(alphabet_index(alphabet, "Nicolas"), "19s")
print(alphabet_index(alphabet, "Flavio"), "22v")
print(alphabet_index(alphabet, "Andrey"), "25y")
print(alphabet_index(alphabet, "Hello"), "15o")
