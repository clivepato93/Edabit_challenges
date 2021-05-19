# https://edabit.com/challenge/KQe5w8AdSLbweW8ck
def char_at_pos(r, s):
    a=[r[0::2],r[1::2]][s=="even"]
    return a



print(char_at_pos([2, 4, 6, 8, 10], "even"), [4, 8])
print(char_at_pos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "odd"), [1, 3, 5, 7, 9])
print(char_at_pos("EDABIT", "even"), "DBT")
print(char_at_pos("EDABIT", "odd"), "EAI")
print(char_at_pos("QWERTYUIOP", "even"), "WRYIP")
print(char_at_pos("POIUYTREWQ", "odd"), "PIYRW")
print(char_at_pos("ASDFGHJKLZ", "odd"), "ADGJL")
print(char_at_pos("ASDFGHJKLZ", "even"), "SFHKZ")
print(char_at_pos(["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"], "odd"), ["!", "#", "%", "&", "("])
print(char_at_pos([")", "(", "*", "&", "^", "%", "$", "#", "@", "!"], "odd"), [")", "*", "^", "$", "@"])
print(char_at_pos(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "odd"), ["A", "B", "T", "A", "I", "Y"])
