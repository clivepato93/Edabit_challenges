# https://edabit.com/challenge/qujNfKFH9JkpwzuLt

def first_index(hex_txt, needle):
    hex_txt=[int(i,16) for i in hex_txt.split()]
    for i in needle:
        if ord(i) in hex_txt:
            return hex_txt.index(ord(i))



print(first_index("68 65 6c 6c 6f 20 77 6f 72 6c 64", "world"), 6)
