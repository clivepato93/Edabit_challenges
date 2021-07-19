# https://edabit.com/challenge/Rp6MLyZsGoTeM3QZQ

def char_box(size):
    if type(size)!=int or size<0:
        return -1
    if size==1:
        return [["#"]]
    if size==0:
        return [[]]
    o=list("#"*size)
    middle=["#"]+[" " for i in range(0,size-2)]+["#"]
    return [o if x==0 or x==(size-1) else middle for x in range(0,size)]

print(char_box(1), [["#"]])
print(char_box(2), [["#", "#"], ["#", "#"]])
print(char_box(4), [["#", "#", "#", "#"], ["#", " ", " ", "#"], ["#", " ", " ", "#"], ["#", "#", "#", "#"]])
print(char_box(3), [["#", "#", "#"], ["#", " ", "#"], ["#", "#", "#"]])
print(char_box(10), [["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"], ["#", " ", " ", " ", " ", " ", " ", " ", " ", "#"], ["#", " ", " ", " ", " ", " ", " ", " ", " ", "#"], ["#", " ", " ", " ", " ", " ", " ", " ", " ", "#"], ["#", " ", " ", " ", " ", " ", " ", " ", " ", "#"], ["#", " ", " ", " ", " ", " ", " ", " ", " ", "#"], ["#", " ", " ", " ", " ", " ", " ", " ", " ", "#"], ["#", " ", " ", " ", " ", " ", " ", " ", " ", "#"], ["#", " ", " ", " ", " ", " ", " ", " ", " ", "#"], ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"]])
# special cases
print(char_box(0), [[]], "Value at 0 should be empty")
print(char_box("Hi"), -1, "String values should output -1")
print(char_box(.23), -1, "Decimal valus should output -1")
print(char_box(-4), -1, "Negative values should output -1")