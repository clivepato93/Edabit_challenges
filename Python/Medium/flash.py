# https://edabit.com/challenge/ZZsnGAjYLyosG9zmH

def flash(f):
    f=[str(i) if i!= "x" else "*" for i in f]
    try:
        return round(eval("".join(f)),2)
    except:
        return None


print(flash([3, 'x', 7]), 21)
print(flash([5, '+', 7]), 12)
print(flash([10, '-', 9]), 1)
print(flash([10, '/', 0]), None)
print(flash([10, '/', 3]), 3.33)
print(flash([2, 'x', 0]), 0)
print(flash([0, '/', 5]), 0)
print(flash([0, '+', 0]), 0)
print(flash([0, '-', 0]), 0)
print(flash([8, '-', 0]), 8)
print(flash([0, '/', 0]), None)
print(flash([3, '/', 8]), 0.38)
