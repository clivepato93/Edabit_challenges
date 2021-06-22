# https://edabit.com/challenge/G9QRtAGXb9Cu368Pw
def combinations(*items):
    number=1
    for i in reversed(range(len(items))):
        if items[i]==0:
            continue
        number*=items[i]
    return number

print(combinations(2), 2)
print(combinations(2, 3), 6)
print(combinations(3, 5), 15)
print(combinations(5, 6, 7), 210)
print(combinations(5, 5, 5, 5), 625)
print(combinations(3, 6, 9), 162)
print(combinations(2, 3, 4, 5, 6, 7, 8, 9, 10), 3628800)
print(combinations(4, 5, 6), 120)
print(combinations(5, 6, 7, 8), 1680)
print(combinations(6, 7, 0), 42)
