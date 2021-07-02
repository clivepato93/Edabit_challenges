# https://edabit.com/challenge/ZvjGe7dQAbvbxoPGZ

def rgb_or_hex(*args):
    if type(args[0])==int:
        return '#'+''.join(hex(i)[2:].zfill(2) for i in args)
    args=''.join(i for i in str(args) if i.isalpha() or i.isdigit())
    f=tuple(int(args[i:i+2],16) for i in range(0,len(args),2))
    return f

print(rgb_or_hex(0, 0, 0), "#000000")
print(rgb_or_hex("#000000"), (0, 0, 0))
print(rgb_or_hex(148, 0, 255), "#9400ff")
print(rgb_or_hex("#9400ff"), (148, 0, 255))
print(rgb_or_hex(15, 59, 122), "#0f3b7a")
print(rgb_or_hex("#0f3b7a"), (15, 59, 122))
print(rgb_or_hex(180, 15, 59), "#b40f3b")
print(rgb_or_hex("#b40f3b"), (180, 15, 59))
print(rgb_or_hex(200, 14, 0), "#c80e00")
